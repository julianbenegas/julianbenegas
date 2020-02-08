import { useState, createContext, PropsWithChildren, useContext } from 'react'

export type FilterMethod = ({
  type,
  value
}: {
  type: string
  value: string
}) => void

export type FilterContextType = {
  filters: string[]
  addFilter?: FilterMethod
  removeFilter?: FilterMethod
}

export const FiltersContext = createContext<FilterContextType>({ filters: [] })

export default ({ children }: PropsWithChildren<{}>) => {
  const [filters, setFilters] = useState<string[]>([])

  const addFilter = ({ type, value }: { type: string; value: string }) => {
    switch (type) {
      case 'tag':
        setFilters([...filters, value])
        break
      default:
        break
    }
  }

  const removeFilter = ({ type, value }: { type: string; value: string }) => {
    switch (type) {
      case 'tag':
        setFilters(filters.filter(f => f !== value))
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
