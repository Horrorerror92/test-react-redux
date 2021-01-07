import { WEATHER_CITY_REMEMBER, WEATHER_CITY_DELETE } from './types'

export const addCityToList = (city:string) => {
  return(dispatch:any) => {
    dispatch(rememberCity(city))
  }
}

export const removeCityFromList = (city:string) => {
  return(dispatch:any) => {
    dispatch(deleteCity(city))
  }
}

const rememberCity = (city: string) => ({
  type: WEATHER_CITY_REMEMBER,
  city: city
})

const deleteCity = (city: string) => ({
  type: WEATHER_CITY_DELETE,
  city: city
})
