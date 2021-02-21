type Address = {
  street: string
  city: string
  suite: string
  zipcode: string
}

type Company = {
  companyName: string
}

export type SubmitFormParams = {
  name: string
  username: string
  email: string
  address: Address
  company: Company
}