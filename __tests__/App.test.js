import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import mock from 'react-native-permissions/mock';

it('App renders correctly', async () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
