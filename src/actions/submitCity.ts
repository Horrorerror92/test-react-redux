import axios from 'axios'
import { CityItem } from '../model/data-model/city-item'
import { STARTED_WEATHER_DATA } from './types'
import { API_KEY } from '../.resources/resourses'


export const getCityInformation = (city: CityItem) => {
  return (dispatch:any) => {
    dispatch(addCityStarted());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

const addCityStarted = () => ({
  type: STARTED_WEATHER_DATA
});
