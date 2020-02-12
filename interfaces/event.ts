export interface Event {
  name: string
  id: string
  date: string
  description: string
  isLink: boolean
  tags?: string[]
  isPublished?: boolean
  isPinned?: boolean
}

export interface FullEvent extends Event {
  url: string
}
