import React from 'react';
import { shallow } from 'enzyme';
import { RadioStations } from './RadioStations';

describe('RadioStations', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RadioStations />);
    expect(component).toMatchSnapshot();
  });
  it('should render two <li>', () => {
    let component = shallow(<RadioStations />);
    component.setProps({
      radioStations: [
        { name: 'test2', frequency: 1 },
        { name: 'test2', frequency: 2 },
      ],
    });
    expect(component.find('ul').children()).toHaveLength(2);
  });
});
