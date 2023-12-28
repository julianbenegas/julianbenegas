import { ArrowTopRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const PostFooter = ({ xPostURL }: { xPostURL: string | null }) => {
  return (
    <div className="pt-12">
      <div className="flex flex-col gap-2 items-start">
        {xPostURL && (
          <a
            className="flex items-center gap-1.5 text-sm text-dark-gray10"
            href={xPostURL}
            target="_blank"
            rel="noopener"
          >
            <ArrowTopRightIcon />
            <span>Discuss on X</span>
          </a>
        )}
        <Link
          className="flex items-center gap-1.5 text-sm text-dark-gray10 hover:text-dark-gray12 transition-colors"
          href="/"
        >
          <ArrowLeftIcon />
          <span>Back to index</span>
        </Link>
      </div>
      {/* <div className="mt-6 pt-6 border-t border-dark-gray5">
        <h3 className="font-medium text-xl">Revisions</h3>
      </div>
      <div className="mt-6 pt-6 border-t border-dark-gray5">
        <h3 className="font-medium text-xl">Related</h3>
      </div> */}
    </div>
  )
}
