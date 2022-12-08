import { FunctionComponent } from 'react';
import {
  Avatar,
  BarberInformations,
  ButtonFavorite,
  Container,
  DetailArea,
  FeedBackCard,
  FeedBackContainer,
  FeedBackDescription,
  FeedBackHeader,
  FeedBackNavNext,
  FeedBackNavPrev,
  FeedBackTitle,
  ListServiceTitle,
  NameBarber,
  NameStars,
  ScheduleButton,
  Service,
  ServiceInformation,
  ServicePrice,
  ServiceText,
  ServiceTitle
} from './styles';

import FavoriteIcon from '../../assets/favorite.svg';
import NavNext from '../../assets/nav_next.svg';
import NavPrev from '../../assets/nav_prev.svg';
import Stars from '../_commons/Stars';

interface Props {
  route: any,
  navigation: any
}

const BarberDetail: FunctionComponent<Props> = (props) => {

  const { state } = props.route.params;

  console.log(state)

  return (
    <Container>
      <DetailArea>

        <BarberInformations>
          <Avatar source={{ uri: state?.avatar }} />
          <NameStars>
            <NameBarber>{state?.name}</NameBarber>
            <Stars stars={state?.stars} showNumber />
          </NameStars>
          <ButtonFavorite>
            <FavoriteIcon width="24px" height="24px" fill="#000" />
          </ButtonFavorite>
        </BarberInformations>

        <ListServiceTitle>Lista de serviços</ListServiceTitle>

        <Service>
          <ServiceInformation>
            <ServiceTitle>Corte masculino</ServiceTitle>
            <ServicePrice>R$ 29,90</ServicePrice>
          </ServiceInformation>
          <ScheduleButton>
            <ServiceText>Agendar</ServiceText>
          </ScheduleButton>
        </Service>

        <Service>
          <ServiceInformation>
            <ServiceTitle>Corte masculino</ServiceTitle>
            <ServicePrice>R$ 29,90</ServicePrice>
          </ServiceInformation>
          <ScheduleButton>
            <ServiceText>Agendar</ServiceText>
          </ScheduleButton>
        </Service>

        <Service>
          <ServiceInformation>
            <ServiceTitle>Corte masculino</ServiceTitle>
            <ServicePrice>R$ 29,90</ServicePrice>
          </ServiceInformation>
          <ScheduleButton>
            <ServiceText>Agendar</ServiceText>
          </ScheduleButton>
        </Service>

        <Service>
          <ServiceInformation>
            <ServiceTitle>Corte masculino</ServiceTitle>
            <ServicePrice>R$ 29,90</ServicePrice>
          </ServiceInformation>
          <ScheduleButton>
            <ServiceText>Agendar</ServiceText>
          </ScheduleButton>
        </Service>

        <FeedBackContainer>

          <FeedBackNavPrev>
            <NavPrev width='35px' height='35px' fill='#000' />
          </FeedBackNavPrev>

          <FeedBackCard>
            <FeedBackHeader>
              <FeedBackTitle>{state?.name}</FeedBackTitle>
              <Stars stars={state?.stars} />
            </FeedBackHeader>

            <FeedBackDescription>Muito bom este cortador, muito educado e atencioso. Recomendo demais!</FeedBackDescription>
          </FeedBackCard>

          <FeedBackNavNext>
            <NavNext width='35px' height='35px' fill='#000' />
          </FeedBackNavNext>

        </FeedBackContainer>

      </DetailArea>
    </Container>
  );
};

export default BarberDetail;