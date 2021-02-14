import React from 'react'
import { shallow } from 'enzyme'
import ManaggeCity from './index'

let cityList = ['Minsk, Brest, Vitebsk']
let limit = false
let shortName = false

const mockGetCityInformation = jest.fn(() => {
  return null
})
const mockOnRemoveCityFromList = jest.fn(() => {
  return null
})
let wrapped = shallow(
  <ManaggeCity
    cityList={cityList}
    limit={limit}
    OnGetCityInformation={mockGetCityInformation}
    OnRemoveCityFromList={mockOnRemoveCityFromList}
  />
)

describe('ManaggeCity: ', () => {
  it('should render the ManaggeCity Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
