'use strict';
const path = require('path');
const fs = require('./util/filesystem');
const stamp = require('./util/stamp');
const helper = require('./util/helper');
const { rootPath, bubbaConfigPath, moduleRoot, moduleTemplatePath } = require('./constants')


let clientPath, templatePath, componentPath;


const getBubbaConfig = () => {
  return fs.exists(bubbaConfigPath)
      .then(exists=>(exists ? require(bubbaConfigPath) : require(path.join(moduleTemplatePath,'/bubba.json')) ))
      .then(res=>{
        clientPath = path.join(rootPath, (!res ? '/app' : res.react.path));
        templatePath = path.join(rootPath, (!res ? '/templates' : res.templates.path));
        componentPath = path.join(clientPath, (!res ? '/components' : res.react.components.path));
      })
}



const mkComponent = (filepath, options) => {

  console.log(options.template)
  let templateName = options.template  || 'default',
      output = helper.parsePath(filepath),
      targetPath, templateDirPath;
  
  
  
  console.log('Guf Guf: making component "%s" with "%s" template', output.name, templateName);
  stamp.bubba()

  getBubbaConfig()
    .then(()=>{  
      templateDirPath = path.join(moduleTemplatePath,`/components/${templateName}`)
      targetPath = output.path ? 
        path.join(componentPath, `${output.path}/${output.name}`) :
        path.join(componentPath, `/${output.name}`);
    })
    .then(()=> fs.mkdir(targetPath))
    .then(()=> fs.readdir(templateDirPath))
    .then((files) => {
      
      files.forEach(file => {        
        let outputFiles = `${targetPath}/${output.name}-${file}`,
            templateFilePath = `${templateDirPath}/${file}`;

        fs.exists(outputFiles).then(exists => {
            
            if (exists) throw new Error(`File ${output.name}-${file} Already EXISTS`)
            return fs.read(templateFilePath)
          }).then(template => {
            
              // Replace 'Template' strings to give component Name
              let filedata = template.replace(/Template/g, output.name)
              
              stamp.hev('completed -'+outputFiles.replace(rootPath, ''))

              return fs.touch(outputFiles, filedata)
          }).catch(err=>stamp.growl(err.message))

      });
    });

  

};

module.exports = mkComponent
