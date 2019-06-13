const {IncomingMessage} = require('http')
const rpFactory = require('..')

describe('rp.defaults', function() {
  const rp = rpFactory.defaults({headers: {'x-foo': 'bar'}})

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
