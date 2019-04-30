import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount } from 'enzyme';

import Header from './';

it('header component should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
});


it('check header with shallow', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true);
});


