import Link from 'next/link'
import { Tag as TagInterface } from '../interfaces/tag'
import chroma from 'chroma-js'

const Tag = ({
  tag,
  index,
  totalTags
}: {
  tag: TagInterface
  index: number
  totalTags: number
}) => {
  const colorIndex = index / totalTags
  const color = chroma.scale(['#0ec785', '#3c2bac'])(colorIndex)

  return (
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
          font-size: var(--fs-sm);
          font-weight: 500;
          color: ${color.css()};
          background: ${color.alpha(0.1).css()};
          padding: 2px 4px;
          border-radius: 3px;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default ({ tags }: { tags: TagInterface[] }) => {
  return (
    <div>
      <h3>Tags</h3>
      {tags.map((tag, i) => (
        <Tag key={tag.id} tag={tag} index={i} totalTags={tags.length} />
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
