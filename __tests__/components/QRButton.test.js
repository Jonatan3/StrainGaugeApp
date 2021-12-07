import React from 'react';
import renderer from 'react-test-renderer';
import QRButton from '../../components/QRButton'

test('renders correctly', () => {
    const tree = renderer.create(<QRButton />).toJSON()
    expect(tree).toMatchSnapshot()
})