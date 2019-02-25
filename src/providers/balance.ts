import {IncomingMessage} from 'http'
import {get} from 'https'

import request from 'request-promise'

type EthAddress = string
type EthBalance = number // wei
interface WithBalance {
  balance: EthBalance
}

const url = 'https://api.blockcypher.com/v1/eth/main/addrs/'
const actionBalance = 'balance'

const getBalance = async (addr: EthAddress): Promise<EthBalance> => {
  const res: WithBalance = await request({
    uri: `${url}${addr}/${actionBalance}`,
    json: true
  })

  return (res.balance / Math.pow(10, 18))
}

export {getBalance}
