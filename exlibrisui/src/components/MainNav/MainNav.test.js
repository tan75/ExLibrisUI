import React from 'react';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNav from './MainNav';

Enzyme.configure({ adapter: new Adapter() });

// describe('<MainNav />', () => {
//   it('should render 5 navigation items', () => {
//     const wrapper = shallow(<MainNav />);
//     expect(wrapper.find('<Nav.Link>')).toHaveLength(5);
//   });
// });
