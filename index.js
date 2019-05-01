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

const create = () => {
  const rp = pify(request)
  for (let m of methods) {
    rp[m] = pify(request[m], rp)
  }
  return rp
}

const rp = create()
module.exports = rp
