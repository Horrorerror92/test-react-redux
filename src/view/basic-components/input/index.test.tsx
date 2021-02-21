import React from 'react'
import { shallow } from 'enzyme'
import Input from './index'

const wrapped = shallow(<Input />)

describe('Input', () => {
  it('should render the Input Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
