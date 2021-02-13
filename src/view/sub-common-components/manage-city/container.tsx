import { connect } from 'react-redux';
import manageCity from './index';
import { getCityInformation } from '../../../actions/submitCity';
import { removeCityFromList } from '../../../actions/manageCity';

const mapStateToProps = (state: any) => ({
  cityList: state.cityManageReducer.cityList,
  limit: state.cityManageReducer.limit,
});

const mapDispatchToProps = (dispatch: any) => ({
  OnGetCityInformation(city: string) {
    dispatch(getCityInformation(city));
  },
  OnRemoveCityFromList(city: string) {
    dispatch(removeCityFromList(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(manageCity);
