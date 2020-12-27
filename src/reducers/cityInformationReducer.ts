import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE } from '../actions/types'
import { InitialState } from './initialState'

export const cityInformationReducer = (state = InitialState, action:any) =>{
  switch (action.type) {
    case STARTED_WEATHER_DATA:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case WEATHER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message      
      }
      default:
        return state;
   }
}