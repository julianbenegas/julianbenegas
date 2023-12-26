import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '~/app/_components/header'

export const generateStaticParams = async () => {
  const data = await basehub({ cache: 'no-store' }).query({
    index: {
      postsSection: {
        posts: {
          items: {
            _slug: true,
          },
        },
      },
    },
  })

  return data.index.postsSection.posts.items.map((post) => {
    return {
      params: {
        slug: post._slug,
      },
    }
  })
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const data = await basehub({ next: { revalidate: 60 } }).query({
    index: {
      postsSection: {
        posts: {
          __args: {
            filter: {
              _sys_slug: { eq: params.slug },
            },
          },
          items: {
            _title: true,
            date: true,
            body: {
              json: {
                content: true,
              },
            },
          },
        },
      },
    },
  })

  const post = data.index.postsSection.posts.items[0]

  if (!post) notFound()

  return (
    <main className="py-20 px-5 flex flex-col gap-8 items-center">
      <Link href="/" aria-label="back home">
        <Header variant="minimal" />
      </Link>
      <div className="max-w-2xl">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center">{post._title}</h1>
          <p className="text-sm text-dark-gray10">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            · 548 Views
          </p>
        </div>
        <div className="prose prose-invert text-dark-gray12 mt-8">
          <RichText>{post.body.json.content}</RichText>
        </div>
      </div>
    </main>
  )
}

export default PostPage
