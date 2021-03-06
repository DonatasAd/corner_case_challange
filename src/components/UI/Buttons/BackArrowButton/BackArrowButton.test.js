import React from 'react';
import { shallow } from 'enzyme';
import BackArrowButton from './BackArrowButton';

describe('BackArrowButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<BackArrowButton />);
    expect(component).toMatchSnapshot();
  });
});