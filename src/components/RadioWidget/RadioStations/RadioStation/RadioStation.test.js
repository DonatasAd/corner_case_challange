import React from 'react';
import { shallow } from 'enzyme';
import { RadioStation } from './RadioStation';
import RadioLogo from '../../RadioLogo/RadioLogo';

describe('RadioStation', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RadioStation />);
    expect(component).toMatchSnapshot();
  });
  it('Should render <hr/>', () => {
    const component = shallow(<RadioStation />);
    component.setProps({ appendLine: true });
    expect(component.find('hr')).toHaveLength(1);
  });
  it('should not render <hr/>', () => {
    const component = shallow(<RadioStation />);
    component.setProps({ appendLine: false });
    expect(component.find('hr')).toHaveLength(0);
  });
  it('should render <RadioLogo/>', () => {
    const component = shallow(<RadioStation />);
    component.setProps({ radio: { name: 'test', frequency: 0 }, currentRadio: 'test' });
    expect(component.find(RadioLogo)).toHaveLength(1);
  });
  it('should not render <RadioLogo/>', () => {
    const component = shallow(<RadioStation />);
    component.setProps({ radio: { name: 'test', frequency: 0 }, currentRadio: 'test2' });
    expect(component.find(RadioLogo)).toHaveLength(0);
  });
});
