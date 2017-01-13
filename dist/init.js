'use strict';

const fs = require('./util/filesystem');
const stamp = require('./util/stamp');
const { rootPath, moduleRoot, moduleTemplatePath, bubbaConfigPath } = require('./constants')
const path = require('path');

module.exports = function init(env){

  let outputFilename = path.join(rootPath, '/bubba.json')  
  env = env || 'all';
  
  console.log('bubba initializing');
  stamp.bubba();

  fs.exists(bubbaConfigPath)
    .then(exists=>{        
        if (exists) throw Error('bubba.json already exist')
        return fs.read(`${moduleTemplatePath}/bubba.json`)                        
    }).then(template=>fs.touch(bubbaConfigPath, template))
    .then(createdFile=>{
        if(createdFile) stamp.hev('bubba.json is created')
    }).catch(err=>stamp.growl(err.message))
}