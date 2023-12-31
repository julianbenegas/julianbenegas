import { Redis } from '@upstash/redis'

if (!process.env.REDIS_TOKEN) {
  throw new Error('redis token missing')
}

export const redis = new Redis({
  url: 'https://welcomed-pug-34169.upstash.io',
  token: process.env.REDIS_TOKEN,
})
