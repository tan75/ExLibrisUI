import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNav from './components/MainNav/MainNav';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('<MainNav />', () => {
  it('should render MainNav', () => {
    const wrapper = shallow(<MainNav />);
    console.log(wrapper);
    expect(wrapper.find(<MainNav />)).toHaveLength(1);
  });
});
