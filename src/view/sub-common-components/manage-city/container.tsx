import React, { FC } from 'react'
import { connect } from 'react-redux'
import ManageCity from './index'
import { getCityInformation } from '../../../actions/submitCity'
import { removeCityFromList } from '../../../actions/manageCity'
import { IManageItem } from '../../../model/data-model/manage-item'

const mapStateToProps = (state: any) => ({
  cityList: state.cityManageReducer.cityList,
  limit: state.cityManageReducer.limit,
})

const mapDispatchToProps = (dispatch: any) => ({
  OnGetCityInformation(city: string) {
    dispatch(getCityInformation(city))
  },
  OnRemoveCityFromList(city: string) {
    dispatch(removeCityFromList(city))
  },
})

const ManageCityContainer: FC<IManageItem> = (props) => {
  return (
    <ManageCity
      cityList={props.cityList}
      limit={props.limit}
      OnGetCityInformation={props.OnGetCityInformation}
      OnRemoveCityFromList={props.OnRemoveCityFromList}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCityContainer)
