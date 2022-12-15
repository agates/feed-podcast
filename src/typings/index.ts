export interface Item {
  title: string
  id?: string
  link: string
  date: Date

  description?: string
  content?: string
  category?: Category[]

  guid?: string

  image?: string | Enclosure
  audio?: string | Enclosure
  video?: string | Enclosure
  enclosure?: Enclosure

  author?: Author[]
  contributor?: Author[]

  published?: Date
  copyright?: string

  extensions?: Extension[]

  categories?: {
    value: number | string
    label?: string
  }[]

  community?: {
    statistics: {
      views: number
    }
  }

  embed?: {
    url: string
    allowFullscreen: true
  }

  keywords?: string[]

  subTitle?: {
    type: string
    lang: string
    href: string
  }[]

  player?: {
    url: string
  }

  torrents?: {
    url: string
    title?: string
    size_in_bytes?: number
  }[]

  videos?: {
    type?: string
    medium?: string
    height?: number
    fileSize?: number
    url?: string
    framerate?: number
    duration?: number
  }[]

  thumbnails?: {
    url: string
    height: number
    width: number
  }[]

  nsfw?: boolean
}

export interface Enclosure {
  url: string
  type?: string
  length?: number
  title?: string
  duration?: number
}

export interface Author {
  name?: string
  email?: string
  link?: string
}

export interface Category {
  name?: string
  domain?: string
  scheme?: string
  term?: string
}

export interface FeedOptions {
  id: string
  title: string
  updated?: Date
  generator?: string
  language?: string
  ttl?: number

  feed?: string
  feedLinks?: any
  hub?: string
  docs?: string

  author?: Author
  link?: string
  description?: string
  image?: string
  favicon?: string
  copyright: string
}

export interface Extension {
  name: string
  objects: any
}
