import { 
  WEATHER_CITY_REMEMBER, 
  WEATHER_CITY_DELETE, 
  CITY_LIMIT,
  CITY_DUPLICATE
 } from './types'

export const addCityToList = (city: string) => {
  return(dispatch:any) => {
    dispatch(rememberCity(city))
  }
}

export const removeCityFromList = (city: string) => {
  return(dispatch:any) => {
    dispatch(deleteCity(city))
  }
}

export const blockCityList = (limit: boolean) => {
  return(dispatch:any) => {
    dispatch(cityListLimit(limit))
  }
}

export const triggeredCityDuplicate = (duplicate: boolean) => {
  return(dispatch:any) => {
    dispatch(cityDuplicate(duplicate))
  }
}

const rememberCity = (city: string) => ({
  type: WEATHER_CITY_REMEMBER,
  city
})

const deleteCity = (city: string) => ({
  type: WEATHER_CITY_DELETE,
  city
})

const cityListLimit = (limit: boolean) => ({
  type: CITY_LIMIT,
  limit
})

const cityDuplicate = (duplicate: boolean) => ({
  type: CITY_DUPLICATE,
  duplicate
})