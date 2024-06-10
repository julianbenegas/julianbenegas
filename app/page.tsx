import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { Section } from './_components/section'
import Link from 'next/link'
import { draftMode } from 'next/headers'
import { ViewsFragment } from './_components/views-fragment'
import { Suspense } from 'react'
import clsx from 'clsx'
import { PageWrapper } from './_components/page-wrapper'
import { DynamicIcon } from './_components/dynamic-icon'
import { LinkWithAnalytics } from './_components/link-with-analytics'

const HomePage = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  return (
    <Pump
      draft={isDraftMode}
      next={{ tags: ['basehub'] }}
      queries={[
        {
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
                  _analyticsKey: true,
                  _id: true,
                  _title: true,
                  label: true,
                  href: true,
                  icon: true,
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
                  _analyticsKey: {
                    __args: {
                      scope: 'query',
                    },
                  },
                  _title: true,
                  _slug: true,
                  __typename: true,
                  excerpt: true,
                  body: {
                    plainText: true,
                  },
                  date: true,
                },
              },
            },
          },
        },
      ]}
    >
      {async ([{ index }]) => {
        'use server'

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
                <h1 className="text-2xl font-semibold text-balance">
                  {index.title}
                </h1>
                <div className="text-sm leading-snug text-dark-gray10 text-balance">
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
                  const El = post.href ? LinkWithAnalytics : 'p'

                  const props = post.href
                    ? {
                        href: post.href,
                        className: 'hover:bg-dark-gray5 transition-colors',
                        target: '_blank',
                        rel: 'noopener',
                        _analyticsKey: post._analyticsKey,
                      }
                    : {}

                  const className = clsx(
                    props.className,
                    'p-1.5 pr-2 select-none flex gap-1.5 max-w-full items-center leading-none rounded-2xl text-dark-gray12 text-xs bg-dark-gray3 border border-dark-gray6',
                    post.href && 'hover:bg-dark-gray5 transition-colors'
                  )

                  const children = (
                    <>
                      {post.icon && (
                        <span>
                          <DynamicIcon name={post.icon as 'X'} />
                        </span>
                      )}
                      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {post.label}
                      </span>
                    </>
                  )

                  if (post.href)
                    return (
                      <LinkWithAnalytics
                        key={post._id}
                        className={className}
                        href={post.href}
                        _analyticsKey={post._analyticsKey}
                      >
                        {children}
                      </LinkWithAnalytics>
                    )

                  return (
                    <p key={post._id} {...props} className={className}>
                      {children}
                    </p>
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
              <div className="flex flex-col gap-3.5 w-full items-center">
                {index.postsSection.posts.items.map((post) => {
                  return (
                    <Link
                      key={post._id}
                      className="bg-dark-gray1 hover:bg-dark-gray2 transition-colors w-full max-w-md p-4 border border-dark-gray4 rounded-lg flex flex-col gap-2"
                      href={`/posts/${post._slug}`}
                    >
                      <h3 className="font-medium text-balance">
                        {post._title}
                      </h3>
                      <p className="text-sm text-dark-gray10 text-balance line-clamp-3">
                        {post.excerpt ??
                          post.body.plainText.split(' ').slice(0, 48).join(' ')}
                      </p>
                      <p className="text-sm text-dark-gray10">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        <Suspense fallback={null}>
                          {' '}
                          · <ViewsFragment
                            _analyticsKey={post._analyticsKey}
                          />{' '}
                          Views
                        </Suspense>
                      </p>
                    </Link>
                  )
                })}
              </div>
            </Section>
          </PageWrapper>
        )
      }}
    </Pump>
  )
}

export default HomePage
