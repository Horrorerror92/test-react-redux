import { STARTED_WEATHER_DATA } from '../actions/types'

const initialState = {
  loading: false,
  data: [],
  error: null
};

export const cityInformationReducer = (state = initialState, action:any) =>{
  switch (action.type) {
    case STARTED_WEATHER_DATA:
      return {
        ...state,
        loading: true
      };
      default:
        return state;
   }
}