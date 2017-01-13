'use strict';

const parsePath = (str) => {
  let path = str.split('/').filter(value=>{
    return value !== ''
  })
  
  let name = path.pop(),
  		filepath = path.join('/')

  return {
    path: filepath ? `/${filepath}` : null,
    name: name
  }
}

module.exports = {
	parsePath
}