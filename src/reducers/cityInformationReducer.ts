import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE} from '../actions/types'

const initialState = {
  loading: false,
  data: [],
  city: null,
  error: null
};

export const cityInformationReducer = (state = initialState, action:any) =>{
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
        data: [...state.data, action.payload]
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