export const Section = ({
  children,
  title,
  subtitle,
}: {
  children?: React.ReactNode
  title?: React.ReactNode
  subtitle?: React.ReactNode
}) => {
  return (
    <section>
      <div className="flex flex-col gap-1.5 text-center items-center">
        <h2 className="text-xl font-medium max-w-xs">{title}</h2>
        {subtitle && (
          <div className="text-sm max-w-xs text-dark-gray10">{subtitle}</div>
        )}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}
