export interface IManageItem {
  cityList: Array<string>
  limit: boolean
  OnGetCityInformation: (city: string) => void
  OnRemoveCityFromList: (city: string) => void
}
