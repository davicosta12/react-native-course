import { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointments from '../components/MainTab/Appointments/Appointments';
import Home from '../components/MainTab/Home/Home';
import Search from '../components/MainTab/Search/Search';
import Favorites from '../components/MainTab/Favorites/Favorites';
import Profile from '../components/MainTab/Profile/Profile';

interface Props { }

const Tab = createBottomTabNavigator();

const MainTab: FunctionComponent<Props> = (props) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Appointments" component={Appointments} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTab;