import React from 'react'
import { shallow } from 'enzyme'
import TwoColumn from './index'

const wrapped = shallow(<TwoColumn />)

describe('TwoColumn', () => {
  it('should render the TwoColumn Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
