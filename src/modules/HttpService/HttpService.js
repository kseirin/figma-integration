'use strict';

/**
 * @namespace HttpService
 */

const https = require('https');

/**
 * @class HttpService
 * @memberOf HttpService
 */
class HttpService {
  /**
   * @param {String} method
   * @param {String} url
   * @param {Object=} headers
   * @return {Promise<*>}
   */
  makeRequest(method, url, headers) {
    const {hostname, path} = this.parseUrl(url);
    return new Promise(send);

    function send(resolve, reject) {
      let data = '';
      https[method.toLowerCase()]({
        hostname,
        path,
        headers,
        agent: false
      }, callback).on("error", reject);

      function callback(res) {
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }
    }
  }

  /**
   * @param url
   * @return {{path, hostname, fullUrl}}
   */
  parseUrl(url) {
    const [fullUrl, hostname, path] = url.match(/https:\/\/([^/]+)(\/.*)/);
    return {
      fullUrl,
      hostname,
      path
    };
  }
}

module.exports = new HttpService();