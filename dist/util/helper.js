'use strict';

const parsePath = (str) => {
  let path = str.split('/').filter(value=>{
    return value !== ''
  })
  
  let name = path.pop()

  return {
    path: path.join('/') ? `/${path.join('/')}` : null,
    name: name
  }
}

module.exports = {
	parsePath
}