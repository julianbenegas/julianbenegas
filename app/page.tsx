import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import { Section } from './_components/section'
import Link from 'next/link'
import { Header } from './_components/header'
import { draftMode } from 'next/headers'
import { ViewsFragment } from './_components/views-fragment'
import { Suspense } from 'react'

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
    <main className="py-20 px-5 flex flex-col gap-16 items-center">
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
        {index.onMyRadarSection.links.items.map((post) => {
          return (
            <a
              key={post._id}
              className="py-1.5 leading-none px-2.5 rounded-2xl text-dark-gray12 text-xs bg-dark-gray3 border border-dark-gray6"
            >
              {post._title}
            </a>
          )
        })}
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
                <p className="text-sm text-dark-gray11 line-clamp-3">
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
