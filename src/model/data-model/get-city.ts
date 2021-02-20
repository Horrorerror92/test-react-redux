export interface IGetCity {
  OnGetCityInformation: (city: string) => void
  OnAddCityToList: (city: string, cityCount: number, cityList: Array<string>) => void
  cityList: Array<string>
  errorMessage: string
  errorMessageFromApi: string
}
