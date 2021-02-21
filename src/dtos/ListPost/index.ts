type User = {
  name: string
  company: Company
}

type Company = {
  name: string
}

export type Post = {
  id: number
  userId: number
  user: User
  title: string
  body: string
}

export type Data = {
  data: Post[]
}
