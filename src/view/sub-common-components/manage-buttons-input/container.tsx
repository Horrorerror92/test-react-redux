import { connect } from 'react-redux'
import manageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { addCityToList } from '../../../actions/manageCity'

const mapStateToProps = (state:any) => ({
  cityId: state.cityInformationReducer.targetId
})

const mapDispatchToProps = (dispatch:any) => ({
  OnGetCityInformation(city:string) {
    dispatch(getCityInformation(city))
  },
  OnAddCityToList(city:string, cityId:number|null) {
    if(city.length >1 && cityId){
      dispatch(addCityToList(city))
    }    
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(manageButtonsInput)

