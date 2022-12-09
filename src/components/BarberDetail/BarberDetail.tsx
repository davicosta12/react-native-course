import { FunctionComponent, useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
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
  ServiceTitle,
  SwipeDot,
  SwipeDotActive,
  SwipeImage,
  SwipeItem
} from './styles';

import FavoriteIcon from '../../assets/favorite.svg';
import NavNext from '../../assets/nav_next.svg';
import NavPrev from '../../assets/nav_prev.svg';
import Stars from '../_commons/Stars';
import BarberModal from '../_commons/BarberModal';
import Api from '../../Api';

interface Props {
  route: any,
  navigation: any
}

const BarberDetail: FunctionComponent<Props> = (props) => {

  const [openModal, setOpenModal] = useState(false);
  const [service, setService] = useState({} as any);

  const { state } = props.route.params;
  const [userInfo, setUserInfo] = useState({
    id: state.id,
    avatar: state.avatar,
    name: state.name,
    stars: state.stars
  });

  // useEffect(() => {
  //   const getBarberInfo = async () => {
  //     const json = await Api.
  //   }
  // }, []);

  return (
    <Container>
      <FeedBackNavPrev onPress={() => { }}>
        <NavPrev width='43.4px' height='43.4px' fill='#fff' />
      </FeedBackNavPrev>
      <Swiper
        style={{ height: 240 }}
        dot={<SwipeDot />}
        activeDot={<SwipeDotActive />}
        paginationStyle={{ top: 15, right: 15, left: null, bottom: null }}
        autoplay
      >
        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://149363815.v2.pressablecdn.com/wp-content/uploads/2021/01/5-melhores-Ideias-de-promocao-para-barbearia-1.jpg' }}
            resizeMode='cover'
          />
        </SwipeItem>

        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://149363815.v2.pressablecdn.com/wp-content/uploads/2021/01/5-melhores-Ideias-de-promocao-para-barbearia-1.jpg' }}
            resizeMode='cover'
          />
        </SwipeItem>

        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://149363815.v2.pressablecdn.com/wp-content/uploads/2021/01/5-melhores-Ideias-de-promocao-para-barbearia-1.jpg' }}
            resizeMode='cover'
          />
        </SwipeItem>

      </Swiper>

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
          <ScheduleButton onPress={() => setOpenModal(true)}>
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

      <BarberModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        user={state}
        service={service}
      />
    </Container >
  );
};

export default BarberDetail;