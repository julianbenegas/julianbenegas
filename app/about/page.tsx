import { Pump } from 'basehub/react-pump'
import { Metadata } from 'next'
import { PageWrapper } from '../_components/page-wrapper'
import { Section } from '../_components/section'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little more about me.',
}

const paragraphs = [
  "Hey, I'm Julian. I spend most of my time building products for the web, with a focus on developer tools and the systems that make great software feel effortless.",
  'I care deeply about craft — the small details, the way things feel to use, and the discipline of shipping work that holds up over time. I believe good design and good engineering are the same pursuit from two directions.',
  "When I'm not working, you'll usually find me reading, tinkering with side projects, or thinking about how to make complex ideas simpler to understand.",
]

const AboutPage = async () => {
  return (
    <Pump
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
                  About {index.title}
                </h1>
              </div>
            </section>

            {/* bio */}
            <Section title="Background">
              <div className="flex flex-col gap-4 max-w-md text-sm leading-relaxed text-dark-gray11 text-pretty">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Section>
          </PageWrapper>
        )
      }}
    </Pump>
  )
}

export default AboutPage
