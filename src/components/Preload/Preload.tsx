import { FunctionComponent, useContext, useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import BarberLogo from '../../assets/barber.svg';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

interface Props {
}

const Preload: FunctionComponent<Props> = (props: Props) => {

  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar
            }
          });

          navigation.reset({
            routes: [{ name: 'MainTab' as never }]
          });
        }
        else {
          navigation.navigate('SignIn' as never);
        }
      }
      else {
        navigation.navigate('SignIn' as never);
      }
    }
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo
        width='100%'
        height='160'
      />
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
}

export default Preload;
