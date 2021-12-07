import React from 'react';
import renderer from 'react-test-renderer';
import QRScannerOverlay from '../../components/QRScannerOverlay'

test('renders correctly', () => {
    const tree = renderer.create(<QRScannerOverlay />).toJSON()
    expect(tree).toMatchSnapshot()
})