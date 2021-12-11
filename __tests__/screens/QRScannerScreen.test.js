import React from 'react';
import renderer from 'react-test-renderer';
import QRScannerScreen from '../../screens/QRScannerScreen'

test('renders correctly', () => {
    const tree = renderer.create(<QRScannerScreen />).toJSON()
    expect(tree).toMatchSnapshot()
})