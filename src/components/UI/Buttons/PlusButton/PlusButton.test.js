import React from 'react';
import { shallow } from 'enzyme';
import PlusButton from './PlusButton';

describe('PlusButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PlusButton  />);
    expect(component).toMatchSnapshot();
  });
});