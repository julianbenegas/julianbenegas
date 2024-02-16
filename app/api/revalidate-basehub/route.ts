import { revalidateTag } from 'next/cache'

const webhookSecret = process.env.BASEHUB_WEBHOOK_SECRET
if (typeof webhookSecret !== 'string') {
  throw new Error(
    'Missing BASEHUB_WEBHOOK_SECRET. Get it from the [Webhook Portal](https://basehub.com/docs/connecting-to-your-app/webhooks).'
  )
}

export const POST = (request: Request) => {
  /**
   * Authenticate the request.
   * For more security, follow the Svix guide on how to verify a webhook: https://docs.svix.com/receiving/verifying-payloads/how
   * For simplicity, and because revalidating a cache is not a security risk, we just do basic auth
   * with a Bearer token we'll set up ourselves.
   */
  const authorization = request.headers.get('authorization')
  if (authorization !== `Bearer ${webhookSecret}`) {
    return Response.json({ message: 'Unauthorized.' }, { status: 401 })
  }
  revalidateTag('basehub')
  return Response.json({ revalidated: true, now: Date.now() })
}
