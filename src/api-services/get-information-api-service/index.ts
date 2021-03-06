import axios from 'axios'
import { API_KEY } from '../../.resources/resourses'
import { IDataFromApi } from '../../model/data-model/data-from-api'

const GetInformationApiService = async (city: string) => {
  const result: IDataFromApi = {
    value: null,
    error: null,
  }
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: { q: `${city}`, units: 'metric', mode: 'JSON' },
      headers: {
        'x-rapidapi-key': `${API_KEY}`,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    })
    result.value = response.data
  } catch (e) {
    result.error = e
  }
  return result
}

export default GetInformationApiService
