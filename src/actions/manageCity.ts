import { WEATHER_CITY_REMEMBER, WEATHER_CITY_DELETE, CITY_LIMIT, CITY_DUPLICATE, CITY_SHORT } from './types'

export const addCityToList = (city: string) => {
  return (dispatch: any) => {
    dispatch(rememberCity(city))
  }
}

export const removeCityFromList = (city: string) => {
  return (dispatch: any) => {
    dispatch(deleteCity(city))
  }
}

export const blockCityList = () => {
  return (dispatch: any) => {
    dispatch(cityListLimit())
  }
}

export const triggeredCityDuplicate = () => {
  return (dispatch: any) => {
    dispatch(cityDuplicate())
  }
}

export const triggeredShortName = () => {
  return (dispatch: any) => {
    dispatch(cityShort())
  }
}

const rememberCity = (city: string) => ({
  type: WEATHER_CITY_REMEMBER,
  city,
})

const deleteCity = (city: string) => ({
  type: WEATHER_CITY_DELETE,
  city,
})

const cityListLimit = () => ({
  type: CITY_LIMIT,
})

const cityDuplicate = () => ({
  type: CITY_DUPLICATE,
})

const cityShort = () => ({
  type: CITY_SHORT,
})
