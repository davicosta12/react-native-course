import { createStackNavigator } from '@react-navigation/stack';
import { FunctionComponent } from 'react';
import Preload from '../components/Preload/Preload';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SingUp/SignUp';
import MainTab from './MainTab';

interface Props {
}

const Stack = createStackNavigator();

const MainStack: FunctionComponent<Props> = (props: Props) => {
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
    </Stack.Navigator>
  );
};

export default MainStack;
