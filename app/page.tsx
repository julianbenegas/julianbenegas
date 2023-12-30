import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import { Section } from './_components/section'
import Link from 'next/link'
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
import { PageWrapper } from './_components/page-wrapper'

const HomePage = async () => {
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
      nowSection: {
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
    <PageWrapper bg="black">
      {/* hero */}
      <section className="flex flex-col items-center gap-8">
        <img
          src={index.avatar.url}
          alt={index.avatar.alt ?? ''}
          width={index.avatar.width}
          height={index.avatar.height}
          className="rounded-full border select-none border-dark-gray6 w-28 h-28"
        />
        <div className="flex flex-col gap-1.5 text-center">
          <h1 className="text-2xl font-medium text-balance">{index.title}</h1>
          <div className="text-sm text-dark-gray10 text-balance">
            <RichText
              components={{
                a: (props) => (
                  <a
                    {...props}
                    className="underline hover:text-dark-gray11 transition-colors"
                  />
                ),
              }}
            >
              {index.bio.json.content}
            </RichText>
          </div>
        </div>
      </section>

      {/* now */}
      <Section
        title={index.nowSection.sectionHeader.title}
        subtitle={
          index.nowSection.sectionHeader.subtitle ? (
            <RichText>
              {index.nowSection.sectionHeader.subtitle.json.content}
            </RichText>
          ) : null
        }
      >
        <div className="flex gap-2 flex-wrap justify-center max-w-2xl overflow-hidden">
          {index.nowSection.links.items.map((post) => {
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
                  'p-1.5 select-none flex gap-1.5 max-w-full items-center leading-none rounded-2xl text-dark-gray12 text-xs bg-dark-gray3 border border-dark-gray6'
                )}
              >
                {icon && <span>{icon}</span>}
                <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                  {post.label}
                </span>
              </El>
            )
          })}
        </div>
      </Section>

      {/* posts */}
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
                className="bg-dark-gray1 hover:bg-dark-gray2 transition-colors max-w-md p-4 border border-dark-gray4 rounded-lg flex flex-col gap-2"
                href={`/posts/${post._slug}`}
              >
                <h3 className="font-medium text-balance">{post._title}</h3>
                <p className="text-sm text-dark-gray10 text-balance line-clamp-3">
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
    </PageWrapper>
  )
}

export default HomePage
