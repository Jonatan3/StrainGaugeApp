import React from 'react';
import renderer from 'react-test-renderer';
import QRButtonNoText from '../../components/QRButtonNoText'

test('renders correctly', () => {
    const tree = renderer.create(<QRButtonNoText />).toJSON()
    expect(tree).toMatchSnapshot()
})