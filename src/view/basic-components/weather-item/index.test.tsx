import React from 'react';
import { shallow } from 'enzyme';
import WeatherComponent from './index';

const data = 'test data';
let wrapped = shallow(<WeatherComponent data={data} />);

describe('WeatherComponent', () => {
  it('should render the WeatherComponent Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders WeatherComponent data', () => {
    expect(wrapped.find('p').text()).toEqual(data);
  });
});
