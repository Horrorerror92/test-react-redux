import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE, WEATHER_DATA_GET_ID } from '../actions/types'
import { InitialState } from './initialState'

export const cityInformationReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case STARTED_WEATHER_DATA:
      return {
        ...state,
        loading: true,
        targetId: null,
        errorMessageFromApi: '',
      }
    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      }
    case WEATHER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        errorMessageFromApi: "City doesn't exist or the request is unavailable.",
      }
    case WEATHER_DATA_GET_ID:
      return {
        ...state,
        targetId: action.payload.targetId,
      }
    default:
      return state
  }
}
