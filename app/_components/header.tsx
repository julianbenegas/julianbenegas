import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import clsx from 'clsx'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { Fragment } from 'react'

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

export const InnerPageHeader = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  const data = await basehub({
    next: { revalidate: 60 },
    draft: isDraftMode,
  }).query({
    settings: {
      header: {
        navLinks: {
          items: {
            label: true,
            href: true,
            _id: true,
            isExternal: true,
            highlight: true,
          },
        },
      },
    },
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
    },
  })

  return (
    <header className="flex items-center gap-4 justify-between px-3 py-2 border-b border-dark-gray4 sticky top-0 bg-dark-gray1">
      <Link className="flex items-center gap-2 group" href="/">
        <img
          src={data.index.avatar.url}
          alt={data.index.avatar.alt ?? ''}
          width={data.index.avatar.width}
          height={data.index.avatar.height}
          className="rounded-full border border-dark-gray6 w-6 h-6"
        />
        <div className="sm:flex hidden flex-col gap-1.5 text-center">
          <h1 className="text-sm text-dark-gray12 transition-colors">
            {data.index.title}
          </h1>
        </div>
      </Link>
      <nav className="text-sm text-dark-gray10">
        {data.settings.header.navLinks.items.map((navLink, i, { length }) => {
          const isLast = i === length - 1
          return (
            <Fragment key={navLink._id}>
              <Link
                href={navLink.href}
                className={clsx(
                  'transition-colors',
                  navLink.highlight
                    ? 'text-dark-orange10 hover:text-dark-orange11'
                    : 'hover:text-dark-gray11'
                )}
                {...(navLink.isExternal
                  ? { target: '_blank', rel: 'noopener' }
                  : {})}
              >
                {navLink.label}
              </Link>
              {!isLast && (
                <span className="cursor-default select-none"> · </span>
              )}
            </Fragment>
          )
        })}
      </nav>
    </header>
  )
}
