import React from 'react';
import { Navbar } from 'react-bootstrap';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNav from './MainNav';

configure({ adapter: new Adapter() });

describe('<MainNav />', () => {
  it('should render div with className "MainNav">', () => {
    const wrapper = shallow(<MainNav />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.contains(<div className="MainNav" />));
  });

  it('renders children <Navbar >', () => {
    const wrapper = shallow(
      <div>
        <Navbar />
      </div>
    );
    expect(wrapper.contains(<Navbar />));
  });
});
