const request = require('supertest')
const app = require('./app')

describe('Root route', () => {
  it('should get `/ingress`', async () => {
    const r = await request(app).get('/ingress')
    expect(r.statusCode).toEqual(200)
  })
})
