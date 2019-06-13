const {IncomingMessage} = require('http')
const rp = require('..')

describe('Simple', function() {
  it('It works', async () => {
    const [res, body] = await rp({
      method: 'GET',
      url: 'https://www.baidu.com/',
      strictSSL: false,
    })

    // res
    res.should.be.instanceof(IncomingMessage)

    // body
    body.should.be.equal(res.body)
    body.should.match(/百度/)
  })

  it('http verb method works', async () => {
    const [res, body] = await rp.get('https://www.baidu.com/', {
      strictSSL: false,
    })

    // res
    res.should.be.instanceof(IncomingMessage)

    // body
    body.should.be.equal(res.body)
    body.should.match(/百度/)
  })
})
