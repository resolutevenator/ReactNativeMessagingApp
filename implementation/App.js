import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import ChannelScreen from './ChannelScreen';
import CreateChannelScreen from './CreateChannelScreen'

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Channel: { screen: ChannelScreen },
  Splash: { screen: SplashScreen },
  CreateChannel: { screen: CreateChannelScreen},
});

export default App;


