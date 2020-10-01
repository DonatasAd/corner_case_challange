import React from 'react';
import { shallow } from 'enzyme';
import RadioWidget from './RadioWidget';

describe('RadioWidget', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RadioWidget />);
    expect(component).toMatchSnapshot();
  });
});
