const {IncomingMessage} = require('http')
const requestFactory = require('request')
const rpFactory = require('..')

describe('rp.createFrom', function() {
  const request = requestFactory.defaults({headers: {'x-foo': 'bar'}})
  const rp = rpFactory.createFrom(request)

  it('It works', async () => {
    const [res, json] = await rp({
      method: 'GET',
      url: 'http://httpbin.org/get',
      json: true,
    })

    // res
    res.should.be.instanceof(IncomingMessage)

    // body
    json.should.be.equal(res.body)

    // headers
    // toLowerCase
    for (let key in json.headers) {
      json.headers[key.toLowerCase()] = json.headers[key]
    }
    json.headers['x-foo'].should.equal('bar')
  })

  it('http verb method works', async () => {
    const [res, json] = await rp.get('http://httpbin.org/get', {
      json: true,
    })

    // res
    res.should.be.instanceof(IncomingMessage)

    // body
    json.should.be.equal(res.body)

    // headers
    // toLowerCase
    for (let key in json.headers) {
      json.headers[key.toLowerCase()] = json.headers[key]
    }
    json.headers['x-foo'].should.equal('bar')
  })
})
