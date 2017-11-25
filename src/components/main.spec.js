import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

it('renders without crashing', () => {
    shallow(<Main />);
});

it('renders instructions to user', () => {
    const wrapper = shallow(<Main />);
    const instructions = <h1>Enter your new contacts' information to send them a personalized email.</h1>
    expect(wrapper.contains(instructions)).toEqual(true);
})