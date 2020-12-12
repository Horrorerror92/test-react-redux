import axios from 'axios'
import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE } from './types'
import { API_KEY } from '../.resources/resourses'


export const getCityInformation = (city: string) => {
  return (dispatch:any) => {
    dispatch(addCityStarted());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      console.log(response);
      dispatch(addCitySuccess(response.data));
    })
    .catch(function (error) {
      console.log(error.message);
      dispatch(addTodoFailure(error.message));
    })
  }
}

const addCityStarted = () => ({
  type: STARTED_WEATHER_DATA
});

const addCitySuccess = (data:any) => ({
  type: WEATHER_DATA_SUCCESS,
  payload: {
    ...data
  }
});

const addTodoFailure = (error:any) => ({
  type: WEATHER_DATA_FAILURE,
  payload: {
    error
  }
});