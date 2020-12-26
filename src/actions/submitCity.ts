import axios from 'axios'
import { STARTED_WEATHER_DATA, WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILURE } from './types'
import { API_KEY } from '../.resources/resourses'


export const getCityInformation = (city: string) => {
  return (dispatch:any) => {
    dispatch(addCityStarted());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      const dataFromParse = parseData(response.data)
      dispatch(addCitySuccess(dataFromParse));
    })
    .catch(function (error) {
      dispatch(addTodoFailure(error));
    })
  }
}

const addCityStarted = () => ({
  type: STARTED_WEATHER_DATA
});

const addCitySuccess = (data:any) => ({
  type: WEATHER_DATA_SUCCESS,
  payload: {
    data
  }
});

const addTodoFailure = (error:any) => ({
  type: WEATHER_DATA_FAILURE,
  payload: {
    error
  }
});

const parseData = (data: any) => {
  let dataReturn = [] 
  dataReturn.push(`City : ${data.name}`)
  for (let key in data.main) {
    if(data.main.hasOwnProperty(key)){
      if(key === 'temp') { dataReturn.push(`Temp : ${data.main[key]} C`)} 
      if(key === 'feels_like') { dataReturn.push(`Feels like : ${data.main[key]} C`)} 
      if(key === 'humidity') { dataReturn.push(`Humidity : ${data.main[key]} %`)} 
    }
  }
  for (let key in data.sys) {
    if(data.sys.hasOwnProperty(key)){
      if(key === 'country') { dataReturn.push(`Country : ${data.sys[key]}`)} 
    }
  } 
  return dataReturn
}
