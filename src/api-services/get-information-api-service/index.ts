import axios from 'axios'
import { API_KEY } from '../../.resources/resourses'

let corsPrefix: string

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  corsPrefix = ''
} else {
  corsPrefix = 'https://cors-anywhere.herokuapp.com/'
}

const GetInformationApiService = async (city: string) => {
  const result: any = {
    value: null,
    error: null,
  }
  try {
    const response = await axios(
      `${corsPrefix}http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    result.value = response.data
  } catch (e) {
    result.error = e
  }
  return result
}

export default GetInformationApiService
