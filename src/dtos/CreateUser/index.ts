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

type ResponseDataGeolocation = {
	lat: string
	lng: string
}

type ResponseDataAddress = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: ResponseDataGeolocation
}

type ResponseDataCompany = {
	name: string
	catchPhase: string
	bs: string
}

type UserHttpResponse = {
  id: number
	name: string
	username: string
	email: string
	phone: string
	website: string
	address: ResponseDataAddress
	company: ResponseDataCompany
}

export type Response = {
  data: UserHttpResponse
}
