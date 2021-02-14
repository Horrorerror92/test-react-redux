import { combineReducers } from 'redux'
import { cityInformationReducer } from './cityInformationReducer'
import { cityManageReducer } from './cityManageReducer'

const rootReducer = combineReducers({
  cityInformationReducer,
  cityManageReducer,
})

export default rootReducer
