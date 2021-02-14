import React from 'react'
import { shallow } from 'enzyme'
import Input from './index'

let wrapped = shallow(<Input />)

describe('Input', () => {
  it('should render the Input Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
