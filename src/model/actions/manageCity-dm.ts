interface IManageCity {
  WEATHER_CITY_REMEMBER: string
  WEATHER_CITY_DELETE: string
  CITY_LIMIT: string
  CITY_DUPLICATE: string
  CITY_SHORT: string
}
interface ICityRemember {
  type: IManageCity['WEATHER_CITY_REMEMBER']
  city: string
}
interface ICityDelete {
  type: IManageCity['WEATHER_CITY_DELETE']
  city: string
}
interface ICityLimit {
  type: IManageCity['CITY_LIMIT']
}
interface ICityDuplicate {
  type: IManageCity['CITY_DUPLICATE']
}
interface ICityShort {
  type: IManageCity['CITY_SHORT']
}

export type DispatchICityRemember = (arg: ICityRemember) => ICityRemember
export type DispatchICityDelete = (arg: ICityDelete) => ICityDelete
export type DispatchICityLimit = (arg: ICityLimit) => ICityLimit
export type DispatchICityDuplicate = (arg: ICityDuplicate) => ICityDuplicate
export type DispatchICityShort = (arg: ICityShort) => ICityShort

export type ManageCityAction = ICityRemember | ICityDelete | ICityLimit | ICityDuplicate | ICityShort
