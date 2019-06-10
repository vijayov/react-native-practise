import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegisterScreen from './src/screens/Auth/Register';
import SideDrawer from './src/screens/SideDrawer';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const AuthStack = createStackNavigator({
  SignIn : AuthScreen,
  Register : RegisterScreen
}, 
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});


const TabNavigator = createBottomTabNavigator({
    FindPlace : FindPlaceScreen,
    SharePlace : SharePlaceScreen
  },
  {
    defaultNavigationOptions : ({navigation}) => ({
      tabBarIcon: ({ focused, horizonatal, tintColor }) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'FindPlace'){
          iconName = `md-map`;
        } else if (routeName === 'SharePlace'){
          iconName = `ios-share-alt`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
      initialRouteName: 'FindPlace'
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const MainNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
  }
},{
    drawerLockMode: 'locked-open',
    contentComponent: props => <SideDrawer {...props} />,
}) 

const App = createAppContainer(createSwitchNavigator(
  {
    Auth : AuthStack,
    MainApp: TabNavigator,
    PlaceDetail : PlaceDetail
  },
  {
    initialRouteName : 'Auth',
  }
));

export default App;