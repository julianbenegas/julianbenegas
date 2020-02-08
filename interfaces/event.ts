export interface Event {
  name: string
  id: string
  timestamp: number
  tags: string[]
  description: string
}

export interface FullEvent extends Event {
  url: string
}
