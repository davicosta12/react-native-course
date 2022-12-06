import { FunctionComponent } from 'react';
import styled from 'styled-components/native';

interface Props {
  IconSvg: any;
  placeholder: string;
  value: string;
  onChangeText: any;
  password?: boolean;
}

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83D6E3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;

const SignInput: FunctionComponent<Props> = (props: Props) => {

  const {
    IconSvg, placeholder, value, onChangeText, password
  } = props;

  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}

      />
    </InputArea>
  );
}

export default SignInput;

SignInput.defaultProps = {
  password: false
}
