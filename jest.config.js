module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "node_modules/(?!(react-native"
          + "|@react-native"
          + "|react-navigation-tabs"
          + "|react-native-splash-screen"
          + "|react-native-screens"
          + "|react-native-reanimated"
          + "|react-native-camera"
          + "|react-native-qrcode-scanner"
          + "|react-native-permissions"
          + "|react-native-gesture-handler"
        + ")/)",
      ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
    setupFiles: ['<rootDir>/jest.setup.js']
};