import { connect } from 'react-redux'
import manageInformation from './index'

const mapStateToProps = (state:any) => ({
  error: state.error,
  data: state.data
})

export default connect(mapStateToProps)(manageInformation)