/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MyApp from './MyApp';
import App from './App';
import DamApp from './DamApp';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => DamApp);
