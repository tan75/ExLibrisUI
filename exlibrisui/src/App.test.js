import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNav from './components/MainNav/MainNav';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  render(<App />);
});
