import React from 'react';
import { shallow } from 'enzyme';
import RadioLogo from './RadioLogo';

describe('RadioLogo', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RadioLogo />);
    expect(component).toMatchSnapshot();
  });
});
