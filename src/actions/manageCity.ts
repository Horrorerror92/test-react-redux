import { WEATHER_CITY_REMEMBER, WEATHER_CITY_DELETE } from './types'

export const addCityToList = (city:string) => {
  return(dispatch:any) => {
    dispatch(rememberCity(city))
  }
}

export const removeCityFromList = (cityId:any) => {
  return(dispatch:any) => {
    dispatch(deleteCity(cityId))
  }
}

const rememberCity = (city: string) => ({
  type: WEATHER_CITY_REMEMBER,
  city: city
})

const deleteCity = (cityId: any) => ({
  type: WEATHER_CITY_DELETE,
  city: cityId
})
