import chroma from 'chroma-js'
import { useFilters, FilterMethod } from '../context/filtersContext'
import { useTheme } from 'next-themes'

const Tag = ({
  tag,
  index,
  totalTags,
  isActiveFilter,
  addFilter,
  removeFilter
}: {
  tag: string
  index: number
  totalTags: number
  isActiveFilter: boolean
  addFilter?: FilterMethod
  removeFilter?: FilterMethod
}) => {
  const { theme } = useTheme()
  const colorIndex = index / totalTags
  const green = theme === 'dark' ? '#17D0B8' : '#129E8C'
  const purple = theme === 'dark' ? '#A2B0FF' : '#4B60D6'
  const color = chroma.scale([green, purple])(colorIndex)

  const background = color.alpha(0.1).css()
  const text = color.css()

  const handleClick = () => {
    if (isActiveFilter) removeFilter?.({ type: 'tag', value: tag })
    else addFilter?.({ type: 'tag', value: tag })
  }

  return (
    <button onClick={handleClick}>
      {tag}
      <style jsx>{`
        button {
          display: block;
          margin: 0.85em 0;
          color: var(--teal-3);
          font-size: var(--fs-sm);
          font-weight: 500;
          color: ${isActiveFilter
            ? theme === 'dark'
              ? 'black'
              : 'white'
            : text};
          background: ${isActiveFilter ? text : background};
          padding: 2px 4px;
          border-radius: 3px;
          border: 1px solid ${isActiveFilter ? text : background};
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

const Tags = ({ tags }: { tags: string[] }) => {
  const { filters, addFilter, removeFilter } = useFilters()

  return (
    <div>
      <h3>Tags</h3>
      {tags.map((tag, i) => (
        <Tag
          key={tag}
          tag={tag}
          index={i}
          totalTags={tags.length}
          isActiveFilter={filters?.tags?.includes(tag.toLowerCase())}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      ))}
      <style jsx>{`
        h3 {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          color: var(--grey-6);
          margin: 1.25rem 0 0.85rem;
        }
      `}</style>
    </div>
  )
};

export default Tags;
