import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Carousel from './Carousel.js';

it('Carousel component should renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Carousel />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('check Carousel with shallow', () => {
  const wrapper = shallow(<Carousel />);
  expect(wrapper.exists()).toBe(true);
});


it('should call moveRight during loading', () => {
    const methodNameFake = jest.spyOn(Carousel.prototype, 'moveRight');
    const wrapper = mount(<Carousel />);
    expect(methodNameFake).toHaveBeenCalledTimes(0);
});


it('should call moveLeft during loading', () => {
    const methodNameFake = jest.spyOn(Carousel.prototype, 'moveLeft');
    const wrapper = mount(<Carousel />);
    expect(methodNameFake).toHaveBeenCalledTimes(0);
});



it('should call generateItems during loading', () => {
    const methodNameFake = jest.spyOn(Carousel.prototype, 'generateItems');
    const wrapper = mount(<Carousel />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
});