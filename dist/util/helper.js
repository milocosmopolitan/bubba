'use strict';

const parsePath = (str) => {
  let path = str.split('/').filter(value=>{
    return value !== ''
  })
  
  let name = path.pop(),
  		path = path.join('/');

  return {
    path: path ? `/${path}` : null,
    name: name
  }
}

module.exports = {
	parsePath
}