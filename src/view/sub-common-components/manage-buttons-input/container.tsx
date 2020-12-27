import { connect } from 'react-redux'
import manageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { addCityToList } from '../../../actions/manageCity'

const mapDispatchToProps = (dispatch:any) => ({
  OnGetCityInformation(city:string) {
    dispatch(getCityInformation(city))
  },
  OnAddCityToList(city:string) {
    dispatch(addCityToList(city))
  }
})

export default connect(null,mapDispatchToProps)(manageButtonsInput)

