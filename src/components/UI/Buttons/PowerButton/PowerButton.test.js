import React from 'react';
import { shallow } from 'enzyme';
import PowerButton from './PowerButton';

describe('PowerButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PowerButton  />);
    expect(component).toMatchSnapshot();
  });
});