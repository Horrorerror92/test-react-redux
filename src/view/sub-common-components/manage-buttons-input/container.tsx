import { connect } from 'react-redux'
import manageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { addCityToList } from '../../../actions/manageCity'
import { blockCityList } from '../../../actions/manageCity'
import { triggeredCityDuplicate } from '../../../actions/manageCity'

const mapStateToProps = (state:any) => ({
  cityId: state.cityInformationReducer.targetId,
  cityList: state.cityManageReducer.cityList,
  cityDuplicate: state.cityManageReducer.duplicate
})

const mapDispatchToProps = (dispatch:any) => ({
  OnGetCityInformation(city:string) {
    dispatch(getCityInformation(city))
  },
  OnAddCityToList(city:string, cityCount:number, cityList:Array<string>) {
    let duplicateCity = false
    for(let i = 0; i < cityList.length; i++){
      if(cityList[i] === city) {
        duplicateCity = true
      }
    }
    if(city.length >1 && cityCount < 5 && !duplicateCity){
      dispatch(addCityToList(city))
    }
    if(cityCount>4){
      dispatch(blockCityList(true))
    }
    if(duplicateCity){
      dispatch(triggeredCityDuplicate(duplicateCity))
    }   
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(manageButtonsInput)

