import axios from 'axios'
import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE, WEATHER_DATA_GET_ID } from './types'
import GetInformationApiService from '../api-services/get-information-api-service/index'

export const getCityInformation = (city: string) => {
  return async (dispatch: any) => {
    dispatch(addCityStarted())
    const result: any = await GetInformationApiService(city)
    if (result.value !== null) {
      const dataFromParse = parseData(result.value)
      const targetId = parseId(result.value)
      dispatch(addCitySuccess(dataFromParse))
      dispatch(addCityId(targetId))
    }
    if (result.error !== null) {
      dispatch(addTodoFailure(result.error.response.statusText))
    }
  }
}

const addCityStarted = () => ({
  type: STARTED_WEATHER_DATA,
})

const addCitySuccess = (data: any) => ({
  type: WEATHER_DATA_SUCCESS,
  payload: {
    data,
  },
})

const addCityId = (targetId: any) => ({
  type: WEATHER_DATA_GET_ID,
  payload: {
    targetId,
  },
})

const addTodoFailure = (error: any) => ({
  type: WEATHER_DATA_FAILURE,
  payload: {
    error,
  },
})

const parseData = (data: any) => {
  const dataReturn = []
  dataReturn.push(`City : ${data.name}`)
  for (let key in data.main) {
    if (data.main.hasOwnProperty(key)) {
      if (key === 'temp') {
        dataReturn.push(`Temp : ${data.main[key]} C`)
      }
      if (key === 'feels_like') {
        dataReturn.push(`Feels like : ${data.main[key]} C`)
      }
      if (key === 'humidity') {
        dataReturn.push(`Humidity : ${data.main[key]} %`)
      }
    }
  }
  for (let key in data.sys) {
    if (data.sys.hasOwnProperty(key)) {
      if (key === 'country') {
        dataReturn.push(`Country : ${data.sys[key]}`)
      }
    }
  }
  return dataReturn
}

const parseId = (data: any) => {
  return data.id
}
