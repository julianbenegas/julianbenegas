export interface Event {
  name: string
  id: string
  date: string
  tags: string[]
  description: string
}

export interface FullEvent extends Event {
  url: string
}
