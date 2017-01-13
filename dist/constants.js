'use strict';
const path = require('path');
const fs = require('./util/filesystem');

const rootPath = process.cwd();
const bubbaConfigPath = path.join(rootPath, '/bubba.json');
const moduleRoot = path.join(rootPath, './node_modules/bubba');
const moduleTemplatePath = path.join(moduleRoot, '/templates');

module.exports = {
  rootPath,
  bubbaConfigPath,
  moduleRoot,
  moduleTemplatePath
}
