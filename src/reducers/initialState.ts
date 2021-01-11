let arrayCityRememberList = JSON.parse(localStorage.getItem('cityList')||'[]') 

export const InitialState = {
  loading: false,
  data: [],
  error: null, 
  targetId: null
};

export const InitialCityList = {
  cityList: arrayCityRememberList,
  limit: false,
  duplicate: false,
  shortName: false
}