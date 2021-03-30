import React from 'react';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNav from './MainNav';
import Paragraph from './Paragraph';

Enzyme.configure({ adapter: new Adapter() });

describe('<MainNav />', () => {
  it('should render 5 navigation items', () => {
    const wrapper = shallow(<Paragraph />);
    const paragraph = wrapper.find('p');
    //expect(wrapper.find('<Nav.Link>')).tohavelength(5);
    expect(paragraph.text()).toEqual('Test React');
  });
});
