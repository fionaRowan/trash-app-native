import { createStackNavigator } from 'react-navigation';
import MapScreen from './src/MapScreen';
import GuideScreen from './src/GuideScreen';

const App = createStackNavigator({
    Map: MapScreen,
    Guide: GuideScreen,
});

export default App;