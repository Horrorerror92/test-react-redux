import React from 'react'
import { shallow } from 'enzyme'
import ManageInformation from './index'

let error = ''
let data = ''
const wrapped = shallow(<ManageInformation error={error} data={data} />)

describe('manageInformation: ', () => {
  it('should render the manageInformation Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
