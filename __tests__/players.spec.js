const request = require('supertest')
const app = require('../server')

describe('Players endpoints', () => {
  it('should get a list of players sorted by id', async done => {
    const res = await request(app).get('/players')
    const sorted = res.body.reduce((prev, p, i, arr) => {
      if (prev && i > 0) {
        return p.id > arr[i - 1].id
      }
      return prev
    }, true)

    expect(res.statusCode).toEqual(200)
    expect(res.body).not.toHaveLength(0)
    expect(sorted).toBe(true)
    done()
  })

  it('should get a player from its id', async done => {
    const res = await request(app).get('/players/17')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
    done()
  })

  it('should return 404 if player not found', async done => {
    const res = await request(app).get('/players/0')

    expect(res.statusCode).toEqual(404)
    done()
  })
})
