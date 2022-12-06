import { FunctionComponent, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SignInput from '../_commons/SignInput';
import Api from '../../Api';
import { Alert } from 'react-native';

interface Props {
}

const SignUp: FunctionComponent<Props> = (props: Props) => {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let res = await Api.signUp(nameField, emailField, passwordField);

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

      } else {
        Alert.alert("Erro: " + res.error);
      }
    } else {
      Alert.alert("Preencha os campos");
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' as never }]
    });
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>

    </Container>
  );
}

export default SignUp;