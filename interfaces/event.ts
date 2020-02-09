export interface Event {
  name: string
  id: string
  date: string
  tags?: string[]
  description: string
  isLink: boolean
  isPublished: boolean
}

export interface FullEvent extends Event {
  url: string
}
