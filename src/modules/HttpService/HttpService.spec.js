'use strict';

const assert = require('assert');
const HttpService = require('./HttpService');

module.exports = () => {
  it("parse url", parseUrl);
};

function parseUrl() {
  let {hostname, path} = HttpService.parseUrl(`https://api.figma.com/v1/teams/42/projects`);
  assert.strictEqual(hostname, `api.figma.com`);
  assert.strictEqual(path, `/v1/teams/42/projects`);
}