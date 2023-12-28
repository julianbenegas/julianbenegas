import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import { Section } from './_components/section'
import Link from 'next/link'
import { Header } from './_components/header'
import { draftMode } from 'next/headers'
import { ViewsFragment } from './_components/views-fragment'
import { Suspense } from 'react'
import clsx from 'clsx'
import {
  FaceIcon,
  GlobeIcon,
  Link2Icon,
  ReaderIcon,
} from '@radix-ui/react-icons'

const HomePage = async () => {
  const { isEnabled: isDraftMode } = draftMode()
  const { index } = await basehub({
    next: { revalidate: 60 },
    draft: isDraftMode,
  }).query({
    index: {
      onMyRadarSection: {
        sectionHeader: {
          title: true,
          subtitle: {
            json: {
              content: true,
            },
          },
        },
        links: {
          items: {
            _id: true,
            _title: true,
            label: true,
            type: true,
            href: true,
          },
        },
      },
      postsSection: {
        header: {
          title: true,
          subtitle: {
            json: {
              content: true,
            },
          },
        },
        posts: {
          items: {
            _id: true,
            _title: true,
            _slug: true,
            body: {
              plainText: true,
            },
            date: true,
          },
        },
      },
    },
  })

  return (
    <main className="pt-20 pb-10 px-5 flex flex-col gap-16 items-center">
      <Header />
      <Section
        title={index.onMyRadarSection.sectionHeader.title}
        subtitle={
          index.onMyRadarSection.sectionHeader.subtitle ? (
            <RichText>
              {index.onMyRadarSection.sectionHeader.subtitle.json.content}
            </RichText>
          ) : null
        }
      >
        <div className="flex gap-2 flex-wrap justify-center max-w-2xl">
          {index.onMyRadarSection.links.items.map((post) => {
            const El = post.href ? 'a' : 'p'
            const props = post.href
              ? {
                  href: post.href,
                  className: 'hover:bg-dark-gray5 transition-colors',
                  target: '_blank',
                  rel: 'noopener',
                }
              : {}

            let icon: React.ReactNode = null
            switch (post.type) {
              case 'Habit':
                icon = <FaceIcon />
                break
              case 'Reading List':
                icon = <ReaderIcon />
                break
              case 'Link':
                icon = <Link2Icon />
                break
              case 'X Post':
                icon = <GlobeIcon />
                icon = (
                  <svg
                    viewBox="0 0 21.57 19.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 flex"
                  >
                    <path
                      d="M16.99 0h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L3.736 19.5H.426l7.73-8.835L0 0h6.826l4.713 6.231L16.99 0Zm-1.161 17.52h1.833L5.83 1.876H3.863L15.829 17.52Z"
                      fill="currentColor"
                    />
                  </svg>
                )
                break

              default:
                break
            }

            return (
              <El
                key={post._id}
                {...props}
                className={clsx(
                  props.className,
                  'py-1.5 select-none flex gap-1.5 items-center leading-none px-2.5 rounded-2xl text-dark-gray12 text-xs bg-dark-gray3 border border-dark-gray6'
                )}
              >
                {icon && <span>{icon}</span>}
                {post.label}
              </El>
            )
          })}
        </div>
      </Section>
      <Section
        title={index.postsSection.header.title}
        subtitle={
          index.postsSection.header.subtitle ? (
            <RichText>
              {index.postsSection.header.subtitle.json.content}
            </RichText>
          ) : null
        }
      >
        <div className="flex flex-col gap-3.5">
          {index.postsSection.posts.items.map((post) => {
            return (
              <Link
                key={post._id}
                className="bg-dark-gray2 hover:bg-dark-gray3 transition-colors max-w-md p-4 border border-dark-gray4 rounded-lg flex flex-col gap-2"
                href={`/posts/${post._slug}`}
              >
                <h3 className="font-medium">{post._title}</h3>
                <p className="text-sm text-dark-gray10 line-clamp-3">
                  {post.body.plainText.split(' ').slice(0, 48).join(' ')}
                </p>
                <p className="text-sm text-dark-gray10">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  <Suspense fallback={null}>
                    {' '}
                    · <ViewsFragment postId={post._id} /> Views
                  </Suspense>
                </p>
              </Link>
            )
          })}
        </div>
      </Section>
    </main>
  )
}

export default HomePage
