import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { FunctionComponent } from 'react';
import BarberDetail from '../components/BarberDetail/BarberDetail';
import Preload from '../components/Preload/Preload';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SingUp/SignUp';
import MainTab from './MainTab';

import NavPrev from '../assets/nav_prev.svg';
import { useNavigation } from '@react-navigation/native';

interface Props {

}

export const FeedBackNavPrev = styled.TouchableOpacity`
  background-color: #63C2D1;
  width: 43.4px;
  height: 43.4px;
`;

const Stack = createStackNavigator();

const MainStack: FunctionComponent<Props> = (props: Props) => {

  const navigation = useNavigation();
  
  return (
    <Stack.Navigator
      initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="BarberDetail" component={BarberDetail} options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#63C2D1',
        },
        headerLeft: () => (
          <FeedBackNavPrev onPress={() => navigation.goBack()}>
            <NavPrev width='43.4px' height='43.4px' fill='#fff' />
          </FeedBackNavPrev>
        ),
        headerLeftContainerStyle: {
          paddingHorizontal: 10
        },
      }} />
    </Stack.Navigator>
  );
};

export default MainStack;
