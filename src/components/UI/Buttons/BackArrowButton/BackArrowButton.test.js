import React from 'react';
import { shallow } from 'enzyme';
import BackArrowButton from './BackArrowButton';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<BackArrowButton debug />);
  
    expect(component).toMatchSnapshot();
  });
});