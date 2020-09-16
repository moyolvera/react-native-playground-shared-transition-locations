/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/container/App';
import { name as appName } from './app.json';

require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
