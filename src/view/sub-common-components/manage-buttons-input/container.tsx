import { connect } from 'react-redux'
import manageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { CityItem } from '../../../model/data-model/city-item'

const mapDispatchToProps = (dispatch:any) => {
  return {
    onGetCityInformation: (city:CityItem) => {
      dispatch(getCityInformation(city));
    },
  };
}

export default connect(null,mapDispatchToProps)(manageButtonsInput);

