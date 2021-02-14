interface ISubmitCity {
  STARTED_WEATHER_DATA: string
  WEATHER_DATA_SUCCESS: string
  WEATHER_DATA_FAILURE: string
  WEATHER_DATA_GET_ID: string
}
interface ICitySubmit {
  type: ISubmitCity['STARTED_WEATHER_DATA']
}
interface ICitySuccess {
  type: ISubmitCity['WEATHER_DATA_SUCCESS']
  payload: {
    data: any
  }
}
interface ICityFailrue {
  type: ISubmitCity['WEATHER_DATA_FAILURE']
  payload: {
    error: any
  }
}
interface ICityGetId {
  type: ISubmitCity['WEATHER_DATA_GET_ID']
  payload: {
    targetId: any
  }
}

export type DispatchICitySubmit = (arg: ICitySubmit) => ICitySubmit
export type DispatchICitySuccess = (arg: ICitySuccess) => ICitySuccess
export type DispatchICityFailrue = (arg: ICityFailrue) => ICityFailrue
export type DispatchICityGetId = (arg: ICityGetId) => ICityGetId
