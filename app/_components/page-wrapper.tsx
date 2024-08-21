import clsx from 'clsx'

export const PageWrapper = ({
  children,
  bg = 'gray',
}: {
  children?: React.ReactNode
  bg?: 'black' | 'gray'
}) => {
  return (
    <main
      className={clsx(
        'relative pt-16 pb-32 px-5 flex flex-col gap-12 items-center flex-grow',
        bg === 'black' && 'bg-black',
        bg === 'gray' && 'bg-dark-gray1'
      )}
    >
      {children}
    </main>
  )
}
