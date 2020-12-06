import axios from 'axios'
import { CityItem } from '../model/data-model/city-item'
import { ApiKey } from '../model/data-model/key'
import { STARTED_WEATHER_DATA } from './types'


export const getCityInformation = (city: CityItem, APIKey: ApiKey) => ({
  return dispatch => {
    dispatch(addCityStarted());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
})

const addCityStarted = () => ({
  type: STARTED_WEATHER_DATA
});
