import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import Details from '../screens/DetailScreen';
import StartGame from '../screens/GameStartScreen';
import Payment from '../screens/PaymentScreen';
const gamesNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Detail: {
      screen: Details
    },
    StartGame: {
      screen: StartGame
    },
    Payment: {
      screen: Payment
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
