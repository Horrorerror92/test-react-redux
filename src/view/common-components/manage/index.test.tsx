import React from 'react';
import { shallow } from 'enzyme';
import Manage from './index'

const data = 'test data'
let wrapped = shallow(<Manage />)

describe('Manage', () => {
  it('should render the Manage Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});
