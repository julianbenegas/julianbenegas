import Link from 'next/link'
import { Tag as TagInterface } from '../interfaces/tag'

const Tag = ({ tag }: { tag: TagInterface }) => (
  <div className="container">
    <Link href="">
      <a>{tag.name}</a>
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

export default ({ tags }: { tags: TagInterface[] }) => {
  return (
    <div>
      <h3>Tags</h3>
      {tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
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
