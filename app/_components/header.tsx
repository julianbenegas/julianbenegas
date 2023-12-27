import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import clsx from 'clsx'
import { draftMode } from 'next/headers'

export const Header = async ({
  variant = 'normal',
}: {
  variant?: 'minimal' | 'normal'
}) => {
  const { isEnabled: isDraftMode } = draftMode()
  const { index } = await basehub({
    next: { revalidate: 60 },
    draft: isDraftMode,
  }).query({
    index: {
      avatar: {
        url: {
          __args: {
            width: 300,
            height: 300,
          },
        },
        alt: true,
        width: true,
        height: true,
      },
      title: true,
      bio: {
        json: {
          content: true,
        },
      },
    },
  })

  return (
    <header
      className={clsx(
        'flex flex-col items-center',
        variant === 'minimal' && 'gap-4',
        variant === 'normal' && 'gap-8'
      )}
    >
      <img
        src={index.avatar.url}
        alt={index.avatar.alt ?? ''}
        width={index.avatar.width}
        height={index.avatar.height}
        className={clsx(
          'rounded-full border border-dark-gray6',
          variant === 'minimal' && 'w-20 h-20',
          variant === 'normal' && 'w-28 h-28'
        )}
      />
      <div className="flex flex-col gap-1.5 text-center">
        <h1
          className={clsx(
            variant === 'minimal' && 'text-dark-gray10',
            variant === 'normal' && 'text-2xl font-medium'
          )}
        >
          {index.title}
        </h1>
        {variant === 'normal' && (
          <div className="text-sm text-dark-gray10">
            <RichText>{index.bio.json.content}</RichText>
          </div>
        )}
      </div>
    </header>
  )
}
