import {
  useState,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect
} from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const {
    tags: tagsFromQuery,
    search: searchFromQuery
  }: { tags?: string; search?: string } = router.query

  const [filters, setFilters] = useState<Filters>({
    tags: tagsFromQuery ? [...tagsFromQuery?.split(',')] : [],
    words: searchFromQuery ? searchFromQuery.toLowerCase() : ''
  })

  useEffect(() => {
    let initialFilters: Filters = { tags: [], words: '' }
    if (tagsFromQuery) initialFilters.tags = tagsFromQuery.split(',')
    if (searchFromQuery) initialFilters.words = searchFromQuery.toLowerCase()
    setFilters(initialFilters)
  }, [tagsFromQuery, searchFromQuery])

  const addFilter = ({
    type,
    value
  }: {
    type: 'tag' | 'words'
    value: string
  }) => {
    switch (type) {
      case 'tag':
        setFilters({ ...filters, tags: [...filters.tags, value.toLowerCase()] })
        break
      case 'words':
        if (!Array.isArray(value)) setFilters({ ...filters, words: value })
        break
      default:
        break
    }
  }

  const removeFilter = ({ type, value }: { type: string; value: string }) => {
    switch (type) {
      case 'tag':
        setFilters({
          ...filters,
          tags: filters.tags.filter(f => f !== value.toLowerCase())
        })
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
