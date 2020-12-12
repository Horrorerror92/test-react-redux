import { connect } from 'react-redux'
import manageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'

const mapDispatchToProps = (dispatch:any) => ({
  OnGetCityInformation(city:string) {
    dispatch(getCityInformation(city))
  },
})

export default connect(null,mapDispatchToProps)(manageButtonsInput);

