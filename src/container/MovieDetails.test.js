import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import MovieDetail from './MovieDetail.js';

it('MovieDetail component should renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MovieDetail />, div);
	ReactDOM.unmountComponentAtNode(div);
});


it('should call toggleLoading during componentDidMount', () => {
        const methodNameFake = jest.spyOn(MovieDetail.prototype, 'toggleLoading');
        const wrapper = mount(<MovieDetail />);
        expect(methodNameFake).toHaveBeenCalledTimes(1);

});



/* todo */
/*
it('fetches data from server when server returns a successful response', done => { // 1
const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
const mockFetchPromise = Promise.resolve({ // 3
json: () => mockJsonPromise,
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
const wrapper = shallow(<MovieDetail />); // 5
expect(global.fetch).toHaveBeenCalledTimes(0);
expect(global.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
process.nextTick(() => { // 6
expect(wrapper.state()).toEqual(null);
global.fetch.mockClear(); // 7
done(); // 8
});
});
*/