'use strict';

const HttpService = require('./modules/HttpService/HttpService');
const accessToken = `12721-1ee14193-c009-40b7-aa1b-af0419277391`;
const teamId = `655006623217980601`;

HttpService.makeRequest('GET', `https://api.figma.com/v1/teams/${teamId}/projects`, {'X-Figma-Token': accessToken})
           .then(res => console.log(res), err => console.error(err));
