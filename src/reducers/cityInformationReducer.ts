import { STARTED_WEATHER_DATA } from '../actions/types'

const initialState = {
  loading: false,
  todos: [],
  error: null
};

export const cityInformationReducer = (state = initialState, action) {
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