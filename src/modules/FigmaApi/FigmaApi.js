'use strict';

/**
 * @namespace FigmaApi
 */

const HttpService = require('../HttpService/HttpService');

/**
 * @class FigmaApi
 * @memberOf FigmaApi
 * @property {String} accessToken
 */
class FigmaApi {
  constructor() {
    this.figmaHostname = 'https://api.figma.com';
    this.accessToken = null;
  }

  /**
   * @param {String} accessToken
   */
  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * @param {String} method
   * @param {String} endpoint
   * @return {Promise<*>}
   */
  makeRequest(method, endpoint) {
    return HttpService.makeRequest(method, `${this.figmaHostname}${endpoint}`, {'X-FIGMA-TOKEN': this.accessToken});
  }

  /**
   * @param {String} fileKey
   * @return {Promise<*>}
   */
  getFile(fileKey) {
    return this.makeRequest('GET', `/v1/files/${fileKey}`);
  }

  /**
   * @param {String} fileKey
   * @return {Promise<*>}
   */
  getFileNodes(fileKey) {
    return this.makeRequest('GET', `/v1/files/${fileKey}/nodes`);
  }
}

module.exports = new FigmaApi();