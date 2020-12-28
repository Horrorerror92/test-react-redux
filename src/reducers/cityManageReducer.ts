import { WEATHER_CITY_REMEMBER, WEATHER_CITY_DELETE } from '../actions/types'
import { InitialState } from './initialState'

export const cityManageReducer = (state = InitialState, action:any) =>{
  switch (action.type) {
    case WEATHER_CITY_REMEMBER:
      return {
        ...state,
        cityList: state.cityList.concat(action.city) 
      };
    case WEATHER_CITY_DELETE:
      return {
        ...state,
        cityList: state.cityList.filter((item:any) => item.id !== action.city)
      };
      default:
        return state;
   }
}