import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import handShake from '../handshake.png';

it('renders without crashing', () => {
    shallow(<Header />);
});

it('renders App title', () => {
    const wrapper = shallow(<Header />)
    const title = <h1 className="App-title">niceToMeetYou</h1>
    expect(wrapper.contains(title)).toEqual(true);
})

it('renders logo', () => {
    const wrapper = shallow(<Header />)    
    const logo = <img src={handShake} className="App-logo" alt="logo" />
    expect(wrapper.contains(logo)).toEqual(true);
})