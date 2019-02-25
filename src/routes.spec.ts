import express, {Express} from 'express'

import request from 'supertest'

import {router} from './routes'

const validEthAddr = '0x738d145faabb1e00cf5a017588a9c0f998318012'
const invalidEthAddr = 'somegibberish'

describe('/balance/', () => {
  let app: Express
  beforeAll(() => {
    app = express().use(router)
  })

  describe('validEthAddr', () => {
    it('returns 200', async () => {
      const res = await request(app).get(`/balance/${validEthAddr}`)
      expect(res.status).toEqual(200)
    })
  })

  describe('invalidEthAddress', () => {
    it('returns 400', async () => {
      const res = await request(app).get(`/balance/${invalidEthAddr}`)
      expect(res.status).toEqual(400)
    })

  })
})
