import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactInfo from './ContactInfo';
import TextField from 'material-ui/TextField';

it('renders without crashing', () => {
    shallow(<ContactInfo />);
});