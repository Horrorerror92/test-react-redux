import React, { FC } from 'react'
import { connect } from 'react-redux'
import ManageButtonsInput from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { addCityToList, blockCityList, triggeredCityDuplicate, triggeredShortName } from '../../../actions/manageCity'
import { IGetCity } from '../../../model/data-model/get-city'

const mapStateToProps = (state: any) => ({
  cityList: state.cityManageReducer.cityList,
  errorMessage: state.cityManageReducer.errorMessage,
  errorMessageFromApi: state.cityInformationReducer.errorMessageFromApi,
})

const mapDispatchToProps = (dispatch: any) => ({
  OnGetCityInformation(city: string) {
    dispatch(getCityInformation(city))
  },
  OnAddCityToList(city: string, cityCount: number, cityList: Array<string>) {
    let duplicateCity = false
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i] === city) {
        duplicateCity = true
      }
    }
    if (city.trim().length > 1 && cityCount < 5 && !duplicateCity) {
      dispatch(addCityToList(city))
    }
    if (cityCount > 4) {
      dispatch(blockCityList())
    }
    if (duplicateCity) {
      dispatch(triggeredCityDuplicate())
    }
    if (city.length < 2) {
      dispatch(triggeredShortName())
    }
  },
})

const ManageButtonsInputContainer: FC<IGetCity> = (props) => {
  return (
    <ManageButtonsInput
      OnGetCityInformation={props.OnGetCityInformation}
      OnAddCityToList={props.OnAddCityToList}
      cityList={props.cityList}
      errorMessage={props.errorMessage}
      errorMessageFromApi={props.errorMessageFromApi}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageButtonsInputContainer)
