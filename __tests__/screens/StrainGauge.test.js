import React from 'react';
import renderer from 'react-test-renderer';
import StrainGauge from '../../screens/StrainGauge'

test('renders correctly', () => {
    const route = { route: jest.fn() }
    const tree = renderer.create(<StrainGauge route={route} />).toJSON()
    expect(tree).toMatchSnapshot()
})