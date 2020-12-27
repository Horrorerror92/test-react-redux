import { connect } from 'react-redux'
import manageCity from './index'


const mapStateToProps = (state:any) => ({
  cityList: state.cityManageReducer.cityList
})

export default connect(mapStateToProps)(manageCity)