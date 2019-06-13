const pify = require('promise.ify')
const request = require('request')

// https://github.com/request/request/blob/b3a218dc7b5689ce25be171e047f0d4f0eef8919/index.js#L65
const methods = [
  'get',
  'head',
  'options',
  'post',
  'put',
  'patch',
  'del',
  'delete',
]

const createFrom = request => {
  // self `request()`
  const rp = pify(request)

  // add `request.<method>()`
  for (let m of methods) {
    if (request[m]) {
      rp[m] = pify(request[m], rp)
    }
  }

  return rp
}

// default
const rp = createFrom(request)
module.exports = rp

// rp.defaults()
module.exports.defaults = function(options) {
  const newRequest = request.defaults(options)
  const newRp = createFrom(newRequest)
  return newRp
}

// exports createFrom
module.exports.createFrom = createFrom
