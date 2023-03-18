# ICONS

## react-native-vector-icons

需要将 `node_modules` 中 `react-native-vector-icons` 里的 `Fonts` 全部或选择性地链接到 Xcode 项目中。

具体参考: https://github.com/oblador/react-native-vector-icons

## issue meet

### Unrecognized

[Stack Overflow](https://stackoverflow.com/questions/42410354/unrecognized-font-family-on-ios-simulator-with-react-native)

### Multiple commands produce

[Github issue](https://github.com/oblador/react-native-vector-icons/issues/1074)

Removing duplicate font files in Copy Bundle Resources worked for me.

The problem seems to be caused by the new autolinking feature in React Native 0.60 - the line use_native_modules! in
ios/Podfile means when you do pod install, any pods found in node_modules are automatically linked. This means that
links to all font files are added to [CP] Copy Pods Resources when you do pod install.

If you previously installed react-native-vector-icons manually by adding the font files to Copy Bundle Resources, you
then get a "Multiple commands produce..." fatal build error.

So to fix the problem, just remove the font files from Copy Bundle Resources, so that they are only in [CP] Copy Pods
Resources.
