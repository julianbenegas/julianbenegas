import { InfoCircledIcon } from '@radix-ui/react-icons'
import { RichText, RichTextProps } from 'basehub/react-rich-text'
import { clsx } from 'clsx'
import Link from 'next/link'

export const PostBody = ({
  children,
  blocks,
  components,
  className,
}: RichTextProps & { className?: string }) => {
  return (
    <div className={clsx('prose prose-invert text-dark-gray11', className)}>
      <RichText
        blocks={blocks}
        components={{
          a: (props) => {
            const isExternal = props.href.startsWith('/') === false
            return (
              <Link
                {...props}
                className="not-prose text-dark-gray12 border-b border-dark-gray8 hover:border-dark-gray11 transition-colors"
                {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
              />
            )
          },
          hr: () => (
            <p className="my-10 select-none text-center text-dark-gray10 tracking-widest">
              ﹡﹡﹡
            </p>
          ),
          blockquote: ({ children }) => {
            return (
              <blockquote className="border-l-[3px] border-dark-gray7 pl-4 not-prose my-8 italic text-[1.1em] text-dark-gray12">
                {children}
              </blockquote>
            )
          },
          PopoverComponent_mark: ({ children, ...rest }) => {
            return <strong>custom block— {children}</strong>
          },
          CalloutComponent: ({ content }) => {
            return (
              <div className="p-2 rounded-lg bg-dark-gray2 border border-dark-gray4 flex items-start gap-1.5 not-prose">
                <span className="mt-1">
                  <InfoCircledIcon />
                </span>
                <PostBody className="prose-sm !text-dark-gray12">
                  {content.json.content}
                </PostBody>
              </div>
            )
          },
          ...components,
        }}
      >
        {children}
      </RichText>
    </div>
  )
}
