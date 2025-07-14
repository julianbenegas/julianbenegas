'use client'

import { sendEvent } from 'basehub/events'
import { useState } from 'react'
import clsx from 'clsx'

interface NewsletterFormProps {
  emailPlaceholder: string
  buttonText: string
  ingestKey: string
}

export const NewsletterForm = ({
  emailPlaceholder,
  buttonText,
  ingestKey,
}: NewsletterFormProps) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    try {
      // Send event to BaseHub for analytics
      await sendEvent(ingestKey as any, { email })

      setStatus('success')
      setMessage('Thanks for subscribing! 🎉')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md"
    >
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
          disabled={status === 'loading'}
          className={clsx(
            'flex-1 px-3 py-2 text-sm rounded-lg border transition-colors',
            'bg-dark-gray2 border-dark-gray6 text-dark-gray12',
            'placeholder:text-dark-gray10',
            'focus:outline-none focus:ring-1 focus:ring-dark-gray8 focus:border-dark-gray8',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className={clsx(
            'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            'bg-dark-gray12 text-dark-gray1 hover:bg-dark-gray11',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'focus:outline-none focus:ring-1 focus:ring-dark-gray8'
          )}
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </div>

      {message && (
        <p
          className={clsx(
            'text-sm text-center',
            status === 'success' ? 'text-green-400' : 'text-red-400'
          )}
        >
          {message}
        </p>
      )}
    </form>
  )
}
