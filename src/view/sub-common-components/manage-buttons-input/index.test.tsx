import React from 'react';
import { shallow } from 'enzyme';
import ManaggeButtonsInput from './index'

let cityList = ["Minsk, Brest, Vitebsk"]
let cityDuplicate = false
let shortName = false

const mockGetCityInformation = jest.fn(() => { return null })
const mockOnAddCityToList = jest.fn(() => { return null })
let wrapped = shallow(
  <ManaggeButtonsInput 
    cityList = {cityList} 
    OnGetCityInformation = {mockGetCityInformation}
    OnAddCityToList = {mockOnAddCityToList}
    cityDuplicate = {cityDuplicate}
    shortName = {shortName}
  />)


describe('ManaggeButtonsInput: ', () => {
  it('should render the ManaggeButtonsInput Component correctly', () => {   
    expect(wrapped).toMatchSnapshot()
  })
});
