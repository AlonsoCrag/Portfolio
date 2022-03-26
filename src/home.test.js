import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import Home from './screens/home';

test('Home page is mounted', () => {
    render(<Home />);
    expect(screen.queryByText("Building custom microservices")).toBeNull();
})