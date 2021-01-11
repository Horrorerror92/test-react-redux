import React from 'react';
import { shallow } from 'enzyme';
import Header from './index'

const data = 'test data'
let wrapped = shallow(<Header />)

describe('Header', () => {
  it('should render the Header Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});
