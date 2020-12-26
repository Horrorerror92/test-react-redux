import { connect } from 'react-redux'
import manageInformation from './index'

const mapStateToProps = (state:any) => ({
  error: state.cityInformationReducer.error,
  data: state.cityInformationReducer.data
})

export default connect(mapStateToProps)(manageInformation)