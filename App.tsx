import { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

interface Props { }

const App: FunctionComponent<Props> = (props: Props) => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
};

export default App;
