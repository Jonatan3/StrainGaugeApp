import React from 'react';
import renderer from 'react-test-renderer';
import ChannelChart from '../../components/ChannelChart'
import StreamingConstructor from '../../Streaming/StreamingConstructor';

test('renders correctly', () => {
    const streamingConstructor = StreamingConstructor.getInstance()

    const tree = renderer.create(<ChannelChart channelData={streamingConstructor.getChannelById(5156).getChannelData()} />).toJSON()
    expect(tree).toMatchSnapshot()
})