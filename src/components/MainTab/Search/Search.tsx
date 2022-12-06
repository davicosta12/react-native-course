import { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface Props {
}

const Search: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default Search;