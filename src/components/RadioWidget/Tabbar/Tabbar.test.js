import React from 'react';
import { shallow } from 'enzyme';
import { Tabbar } from './Tabbar';

describe('Tabbar', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Tabbar debug />);
    expect(component).toMatchSnapshot();
  });

  
});
