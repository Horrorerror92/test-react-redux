import { WEATHER_CITY_REMEMBER, WEATHER_CITY_DELETE, CITY_LIMIT, CITY_DUPLICATE, CITY_SHORT } from '../actions/types'
import { InitialCityList } from './initialState'

export const cityManageReducer = (state = InitialCityList, action: any) => {
  switch (action.type) {
    case WEATHER_CITY_REMEMBER:
      return {
        ...state,
        cityList: state.cityList.concat(action.city),
        errorMessage: '',
        toLocal: localStorage.setItem('cityList', JSON.stringify(state.cityList.concat(action.city))),
      }
    case WEATHER_CITY_DELETE:
      return {
        ...state,
        cityList: state.cityList.filter((item: any) => item !== action.city),
        limit: false,
        toLocal: localStorage.setItem(
          'cityList',
          JSON.stringify(state.cityList.filter((item: any) => item !== action.city))
        ),
      }
    case CITY_LIMIT:
      return {
        ...state,
        limit: true,
      }
    case CITY_DUPLICATE:
      return {
        ...state,
        errorMessage: "You can't remember the city twice.",
      }
    case CITY_SHORT:
      return {
        ...state,
        errorMessage: 'The name is too short.',
      }
    default:
      return state
  }
}
