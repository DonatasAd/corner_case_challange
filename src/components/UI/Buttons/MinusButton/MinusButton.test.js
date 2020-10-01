import React from 'react';
import { shallow } from 'enzyme';
import MinusButton from './MinusButton';

describe('MinusButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MinusButton />);
    expect(component).toMatchSnapshot();
  });
});