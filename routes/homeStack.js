import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginScreen from '../screens/login';
const screens = {
    loginScreen: {
        screen: loginScreen,
        navigationOptions: {
            title: 'login',
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'black'
              }
        }
    },
}
const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack);