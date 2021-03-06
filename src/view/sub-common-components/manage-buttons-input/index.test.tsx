import React from 'react'
import { shallow } from 'enzyme'
import ManaggeButtonsInput from './index'

let cityList = ['Minsk, Brest, Vitebsk']
let errorMessage = ''
let errorMessageFromApi = ''

const mockGetCityInformation = jest.fn(() => {
  return null
})
const mockOnAddCityToList = jest.fn(() => {
  return null
})
const wrapped = shallow(
  <ManaggeButtonsInput
    cityList={cityList}
    OnGetCityInformation={mockGetCityInformation}
    OnAddCityToList={mockOnAddCityToList}
    errorMessage={errorMessage}
    errorMessageFromApi={errorMessageFromApi}
  />
)

describe('ManaggeButtonsInput: ', () => {
  it('should render the ManaggeButtonsInput Component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
