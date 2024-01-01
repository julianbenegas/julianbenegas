import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import clsx from 'clsx'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { Fragment } from 'react'

export const Header = async () => {
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
    <header className="flex z-50 items-center gap-4 justify-between px-3 py-2 border-b border-dark-gray4 sticky top-0 bg-dark-gray1">
      <Link className="flex items-center gap-2 group" href="/">
        <img
          src={data.index.avatar.url}
          alt={data.index.avatar.alt ?? ''}
          width={data.index.avatar.width}
          height={data.index.avatar.height}
          className="rounded-full border select-none border-dark-gray6 w-6 h-6"
          draggable={false}
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
