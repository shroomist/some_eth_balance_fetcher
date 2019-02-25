import {Request, Response} from 'express'
import {getBalance} from '../providers/balance'

const getBalanceHandler = async (req: Request, res: Response) => {
  let balance
  try {
    balance = await getBalance(req.params.ethaddr)
    res.send(`${ balance } Eth`)
  } catch (e) {
    res.status(400).send(e.error.error)
  }
}

export {getBalanceHandler}
