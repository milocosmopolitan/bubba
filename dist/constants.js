'use strict';
const path = require('path');
const fs = require('./util/filesystem');

const rootPath = process.cwd();
const bubbaConfigPath = path.join(rootPath, '/bubba.json');
const moduleRoot = path.join(rootPath, './node_modules/bubba');
const moduleTemplatePath = path.join(moduleRoot, '/templates');





// const clientPath = path.join(rootPath, (!bubbaConfig ? '/app' : bubbaConfig.react.path));
// const serverPath = path.join(rootPath, (!bubbaConfig ? '/server' : bubbaConfig.express.path));
// const templatePath = path.join(rootPath, (!bubbaConfig ? '/templates' : bubbaConfig.templates.path));
// const componentPath = path.join(clientPath, (!bubbaConfig ? '/components' : bubbaConfig.react.components.path));
// const apiPath 		  = path.join(serverPath, (!bubbaConfig ? '/api' : bubbaConfig.express.routes.path));



module.exports = {
  rootPath,
  bubbaConfigPath,
  moduleRoot,
  moduleTemplatePath,
  // clientPath,
  // serverPath,
  // componentPath,
  // apiPath,
  // templatePath
}
