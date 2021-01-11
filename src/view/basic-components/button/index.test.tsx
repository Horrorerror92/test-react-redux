import React from 'react';
import { shallow } from 'enzyme';
import Button from './index'

const title = 'test title'
let wrapped = shallow(<Button title={title}/>)

describe('Button', () => {
  it('should render the button Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders button name', () => { 
    expect(wrapped.find('button').text()).toEqual(title);
  });
});
