import { Tag as TagInterface } from '../interfaces/tag'
import chroma from 'chroma-js'
import { useFilters, FilterMethod } from '../context/filtersContext'

const Tag = ({
  tag,
  index,
  totalTags,
  isActiveFilter,
  addFilter,
  removeFilter
}: {
  tag: TagInterface
  index: number
  totalTags: number
  isActiveFilter: boolean
  addFilter?: FilterMethod
  removeFilter?: FilterMethod
}) => {
  const colorIndex = index / totalTags
  const color = chroma.scale(['#0ec785', '#3c2bac'])(colorIndex)

  const background = color.luminance(0.9).css()
  const text = color.css()

  const handleClick = () => {
    if (isActiveFilter) {
      removeFilter && removeFilter({ type: 'tag', value: tag.id })
    } else addFilter && addFilter({ type: 'tag', value: tag.id })
  }

  return (
    <button onClick={handleClick}>
      {tag.name}
      <style jsx>{`
        button {
          display: block;
          margin: 0.85em 0;
          color: var(--teal-3);
          font-size: var(--fs-sm);
          font-weight: 500;
          color: ${isActiveFilter ? background : text};
          background: ${isActiveFilter ? text : background};
          padding: 2px 4px;
          border-radius: 3px;
          border: 1px solid ${isActiveFilter ? text : background};
          cursor: pointer;
        }
        button:hover {
          border: 1px solid ${text};
        }
        button:focus {
          outline: none;
          border: 1px solid ${text};
        }
      `}</style>
    </button>
  )
}

export default ({ tags }: { tags: TagInterface[] }) => {
  const { filters, addFilter, removeFilter } = useFilters()

  return (
    <div>
      <h3>Tags</h3>
      {tags.map((tag, i) => (
        <Tag
          key={tag.id}
          tag={tag}
          index={i}
          totalTags={tags.length}
          isActiveFilter={filters.includes(tag.id)}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
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
