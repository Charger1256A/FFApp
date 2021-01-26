import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginScreen from '../screens/login';
import homeScreen from '../screens/home';
import chooseTeamScreen from '../screens/chooseTeams';

const screens = {
    loginScreen: {
        screen: loginScreen,
        navigationOptions: {
            title: 'login',
            headerTitleStyle: {
                color: 'black'
              }
        }
    },
    homeScreen: {
        screen: homeScreen,
        navigationOptions: {
            // title: 'Home',
            headerTitleStyle: {
                color: 'black'
              }
        }
    },
    chooseTeamsScreen: {
        screen: chooseTeamScreen,
        navigationOptions: {
            // title: 'Home',
            headerTitleStyle: {
                color: 'black'
              }
        }
    },
}
const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack);