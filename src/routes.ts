import express from 'express'

import {getBalanceHandler} from './handlers/balance'

const router = express.Router()

router.get('/balance/:ethaddr', getBalanceHandler)

export {router}
