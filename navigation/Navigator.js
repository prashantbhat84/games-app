import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import Details from '../screens/DetailScreen';
const gamesNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Detail: {
      screen: Details
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#a4814c'
      }
    }
  }
);
export default createAppContainer(gamesNavigator);
