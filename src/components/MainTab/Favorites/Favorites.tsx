import { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface Props {
}

const Favorites: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Text>Favorites</Text>
    </Container>
  );
};

export default Favorites;