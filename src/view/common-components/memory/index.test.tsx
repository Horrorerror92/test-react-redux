import React from 'react'
import { shallow } from 'enzyme'
import Memory from './index'

let wrapped = shallow(<Memory />)

describe('Memory', () => {
  it('should render the Memory Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
