import React from 'react';
import NavBar from './components/navbar';
import renderer from 'react-test-renderer';

test('Navigation has two links', () => {
    
    const component = renderer.create(<NavBar />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
})