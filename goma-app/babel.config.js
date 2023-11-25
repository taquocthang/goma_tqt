module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          'app-config': './src/config',
        },
      },
    ],
  ]
};
