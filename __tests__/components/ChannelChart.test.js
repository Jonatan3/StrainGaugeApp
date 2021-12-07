import React from 'react';
import renderer from 'react-test-renderer';
import ChannelChart from '../../components/ChannelChart'

test('renders correctly', () => {
    const tree = renderer.create(<ChannelChart channelId={5156} />).toJSON()
    expect(tree).toMatchSnapshot()
})