import { FunctionComponent, useState } from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointments from '../components/MainTab/Appointments/Appointments';
import Home from '../components/MainTab/Home/Home';
import Search from '../components/MainTab/Search/Search';
import Favorites from '../components/MainTab/Favorites/Favorites';
import Profile from '../components/MainTab/Profile/Profile';
import CustomTabBar from '../components/CustomTabBar/CustomTabBar';
import NavPrev from '../assets/nav_prev.svg';
import { useNavigation } from '@react-navigation/native';

import SearchIcon from '../assets/search.svg';
import { Dimensions } from 'react-native';

interface Props { }

export const FeedBackNavPrev = styled.TouchableOpacity`
  background-color: transparent;
  width: 43.4px;
  height: 43.4px;
`;

export const SearchArea = styled.View`
  background-color: #4EADBE;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFFFFF;
`;

export const SearchFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

const Tab = createBottomTabNavigator();
const ScreenWidth = Dimensions.get('window').width;

const MainTab: FunctionComponent<Props> = (props) => {

  const [locationText, setLocationText] = useState('');


  const handleSearchFinder = async () => {

  }

  const handleLocationSearch = () => {

  }

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#63C2D1',
            height: 100,
          },
          headerTitleContainerStyle: {
            width: ScreenWidth,
          },
          headerTitle: () => (
            <SearchArea>
              <SearchInput
                placeholder="Digite o nome do barbeiro"
                placeholderTextColor="#FFFFFF"
                value={locationText}
                onChangeText={t => setLocationText(t)}
                onEndEditing={handleLocationSearch}
              />
              <SearchFinder onPress={handleSearchFinder}>
                <SearchIcon width="24" height="24" fill="#FFFFFF" />
              </SearchFinder>
            </SearchArea>
          ),
          headerLeft: () => (
            <FeedBackNavPrev onPress={() => navigation.goBack()}>
              <NavPrev width='43.4px' height='43.4px' fill='#fff' />
            </FeedBackNavPrev>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <Tab.Screen name="Appointments" component={Appointments}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#63C2D1'
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerTitle: 'Atendimentos'
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#63C2D1'
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerTitle: 'Favoritos',
          headerLeft: () => (
            <FeedBackNavPrev onPress={() => navigation.goBack()}>
              <NavPrev width='43.4px' height='43.4px' fill='#fff' />
            </FeedBackNavPrev>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#63C2D1'
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerTitle: 'Perfil'
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;