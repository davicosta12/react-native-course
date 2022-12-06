import { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface Props {
}

const Appointments: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Text>Appointments</Text>
    </Container>
  );
};

export default Appointments;