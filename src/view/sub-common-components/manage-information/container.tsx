import React, { FC } from 'react'
import { connect } from 'react-redux'
import ManageInformation from './index'
import { InformationItem } from '../../../model/data-model/information-item'

const mapStateToProps = (state: any) => ({
  error: state.cityInformationReducer.error,
  data: state.cityInformationReducer.data,
})

const ManageInformationContainer: FC<InformationItem> = (props) => {
  return <ManageInformation error={props.error} data={props.data} />
}

export default connect(mapStateToProps)(ManageInformationContainer)
