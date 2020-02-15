import { useState, createContext, PropsWithChildren, useContext } from 'react'

interface Filters {
  tags: string[]
  words: string
}

export type FilterMethod = ({
  type,
  value
}: {
  type: 'tag' | 'words'
  value: string
}) => void

export type FilterContextType = {
  filters: Filters
  addFilter?: FilterMethod
  removeFilter?: FilterMethod
}

export const FiltersContext = createContext<FilterContextType>({
  filters: { tags: [], words: '' }
})

export default ({ children }: PropsWithChildren<{}>) => {
  const [filters, setFilters] = useState<Filters>({ tags: [], words: '' })

  const addFilter = ({
    type,
    value
  }: {
    type: 'tag' | 'words'
    value: string
  }) => {
    switch (type) {
      case 'tag':
        setFilters({ ...filters, tags: [...filters.tags, value] })
        break
      case 'words':
        setFilters({ ...filters, words: value })
        break
      default:
        break
    }
  }

  const removeFilter = ({ type, value }: { type: string; value: string }) => {
    switch (type) {
      case 'tag':
        setFilters({ ...filters, tags: filters.tags.filter(f => f !== value) })
        break
      case 'words':
        setFilters({ ...filters, words: '' })
        break
      default:
        break
    }
  }

  return (
    <FiltersContext.Provider value={{ filters, addFilter, removeFilter }}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => useContext<FilterContextType>(FiltersContext)
