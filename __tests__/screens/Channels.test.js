import React from 'react';
import renderer from 'react-test-renderer';
import Channels from '../../screens/Channels'

test('renders correctly', () => {
    const tree = renderer.create(<Channels />).toJSON()
    expect(tree).toMatchSnapshot()
})