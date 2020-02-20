import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=10, stale-while-revalidate=10'
  )
  return res.status(200).send(new Date().toString())
}
