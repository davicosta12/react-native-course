import { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface Props {
}

const Profile: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

export default Profile;