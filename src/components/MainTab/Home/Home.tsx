import { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface Props {
}

const Home: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
