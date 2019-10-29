import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import Details from '../screens/DetailScreen';
import StartGame from '../screens/GameStartScreen';
import Payment from '../screens/PaymentScreen';
import GameProgress from '../screens/GameProgress';
import Scan from '../screens/ImagePicker';
import AuthScreen from '../screens/AuthScreen';
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
    },
    GameProgress: {
      screen: GameProgress
    },
    BarCodeScanner: {
      screen: Scan
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
const authNavigator = createStackNavigator(
  {
    AuthScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#a4814c'
      }
    }
  }
);
const mainNavigator = createSwitchNavigator({
  Auth: authNavigator,
  Games: gamesNavigator
});
export default createAppContainer(mainNavigator);
