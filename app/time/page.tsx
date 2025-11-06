import { PageWrapper } from '../_components/page-wrapper'
import { TimelineView } from './timeline-view'

export const metadata = {
  title: 'Timeline',
  description: 'A journey through time',
}

const events = [
  {
    id: 1,
    title: 'basehub',
    year: 2023,
    date: 'Present',
    description: 'Building the modern content platform for developers',
    side: 'right' as const,
  },
  {
    id: 2,
    title: 'basement.studio',
    year: 2018,
    date: '2018 - Present',
    description: 'Creating stunning digital experiences and pushing the boundaries of web design',
    side: 'left' as const,
  },
  {
    id: 3,
    title: 'derechadiario',
    year: 2015,
    date: '2015 - 2018',
    description: 'Building impactful digital journalism and news platforms',
    side: 'right' as const,
  },
  {
    id: 4,
    title: 'Learning to code',
    year: 2010,
    date: '2010',
    description: 'Started the incredible journey into software development and web technologies',
    side: 'left' as const,
  },
]

const TimePage = () => {
  return (
    <PageWrapper bg="black">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Timeline</h1>
            <p className="text-dark-gray10">
              Scroll down to travel back in time
            </p>
          </div>
          <TimelineView events={events} />
        </div>
      </div>
    </PageWrapper>
  )
}

export default TimePage
