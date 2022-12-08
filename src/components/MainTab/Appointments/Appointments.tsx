import { FunctionComponent, useState } from 'react';
import AppointmentItem from '../../_commons/AppointmentsItem';
import { Container, ListArea, Scroller } from './styles';

interface Props {
}

const Appointments: FunctionComponent<Props> = (props) => {
  const [list, setList] = useState([
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
    { "avatar": "https://api.b7web.com.br/devbarber/media/avatars/3.png", "distance": 1.9001792731522114, "id": 2, "latitude": "-23.5630907", "longitude": "-46.6982795", "name": "Amanda Sousa", "stars": 4.7 },
  ]);
  return (
    <Container>
      <Scroller>
        <ListArea>
          {list.map((item, k) => (
            <AppointmentItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};

export default Appointments;