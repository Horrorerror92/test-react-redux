import React from 'react';
import { shallow } from 'enzyme';
import Manage from './index'

let wrapped = shallow(<Manage />)

describe('Manage', () => {
  it('should render the Manage Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});
