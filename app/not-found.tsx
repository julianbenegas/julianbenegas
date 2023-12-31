import Link from 'next/link'
import { PageWrapper } from './_components/page-wrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="absolute left-1/2 top-[45%] px-[inherit] sm:w-auto w-full -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
        <h2 className="text-dark-gray12 text-2xl font-medium">Not Found</h2>
        <p className="text-sm text-dark-gray10 text-balance sm:text-nowrap">
          Could not find requested resource.{' '}
          <a
            href="/"
            className="underline hover:text-dark-gray11 transition-colors"
          >
            Return home
          </a>
          .
        </p>
      </div>
    </PageWrapper>
  )
}
