import Link from 'next/link'

const Tag = () => (
  <div className="container">
    <Link href="">
      <a>Work</a>
    </Link>
    <style jsx>{`
      .container {
        margin: 0.85em 0;
      }
      a {
        color: var(--teal-3);
        font-size: var(--fs-md);
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default () => {
  return (
    <div>
      <h3>Tags</h3>
      <Tag />
      <Tag />
      <Tag />
      <style jsx>{`
        h3 {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          color: var(--grey-6);
          margin: 0.85em 0;
        }
      `}</style>
    </div>
  )
}
