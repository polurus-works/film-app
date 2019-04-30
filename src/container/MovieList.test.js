import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import MovieList from './MovieList.js';


it('check MovieList with shallow', () => {
  const wrapper = shallow(<MovieList />);
  expect(wrapper.exists()).toBe(true);
});

