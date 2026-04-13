import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { PageWrapper } from '../_components/page-wrapper'
import { Section } from '../_components/section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export const dynamic = 'force-static'

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
            bio: {
              json: {
                content: true,
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
            <section className="flex flex-col items-center gap-8 max-w-lg">
              <img
                src={index.avatar.url}
                alt={index.avatar.alt ?? ''}
                width={index.avatar.width}
                height={index.avatar.height}
                className="rounded-full border select-none border-dark-gray6 w-28 h-28"
              />
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-2xl font-semibold text-balance">
                  About {index.title}
                </h1>
                <div className="text-sm leading-relaxed text-dark-gray10 text-balance">
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
          </PageWrapper>
        )
      }}
    </Pump>
  )
}

export default AboutPage
