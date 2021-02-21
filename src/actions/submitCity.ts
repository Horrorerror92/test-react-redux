import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE, WEATHER_DATA_GET_ID } from './types'
import GetInformationApiService from '../api-services/get-information-api-service/index'
import { IDataFromApi } from '../model/data-model/data-from-api'

export const getCityInformation = (city: string) => {
  return async (dispatch: any) => {
    dispatch(addCityStarted())
    const result: IDataFromApi = await GetInformationApiService(city)
    if (result.value !== null) {
      const dataFromParse: string[] = parseData(result.value)
      const targetId: string = parseId(result.value)
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

const addCitySuccess = (data: string[]) => ({
  type: WEATHER_DATA_SUCCESS,
  payload: {
    data,
  },
})

const addCityId = (targetId: string) => ({
  type: WEATHER_DATA_GET_ID,
  payload: {
    targetId,
  },
})

const addTodoFailure = (error: IDataFromApi['error']) => ({
  type: WEATHER_DATA_FAILURE,
  payload: {
    error,
  },
})

const parseData = (data: IDataFromApi['value']) => {
  const dataReturn = []
  dataReturn.push(`City : ${data.name}`)
  for (const key in data.main) {
    if (Object.prototype.hasOwnProperty.call(data.main, key)) {
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
  for (const key in data.sys) {
    if (Object.prototype.hasOwnProperty.call(data.sys, key)) {
      if (key === 'country') {
        dataReturn.push(`Country : ${data.sys[key]}`)
      }
    }
  }
  return dataReturn
}

const parseId = (data: IDataFromApi['value']) => {
  return data.id
}
