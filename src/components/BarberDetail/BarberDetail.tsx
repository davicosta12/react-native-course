import { FunctionComponent, useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import {
  Avatar,
  BackNavPrev,
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
  Scroller,
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
import { Text } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

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

  const navigation = useNavigation();

  return (
    <Container>
      <Swiper
        style={{ height: 240 }}
        dot={<SwipeDot />}
        activeDot={<SwipeDotActive />}
        paginationStyle={{ top: 15, right: 15, left: null, bottom: null } as any}
        autoplay
        autoplayTimeout={3.0}
      >
        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://149363815.v2.pressablecdn.com/wp-content/uploads/2021/01/5-melhores-Ideias-de-promocao-para-barbearia-1.jpg' }}
            resizeMode='cover'
          />
        </SwipeItem>

        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://www.belasis.com.br/wp-content/uploads/2019/09/Sistema-Barbearia-Blogpost-Belasis-Banner.png' }}
            resizeMode='cover'
          />
        </SwipeItem>

        <SwipeItem>
          <SwipeImage
            source={{ uri: 'http://marcusmarques.com.br/wp-content/uploads/2019/08/barbearia.jpg' }}
            resizeMode='cover'
          />
        </SwipeItem>

        <SwipeItem>
          <SwipeImage
            source={{ uri: 'https://st2.depositphotos.com/2931363/9695/i/600/depositphotos_96951996-stock-photo-young-handsome-man-in-barbershop.jpg' }}
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

        <Scroller>
          <ListServiceTitle>Lista de serviços</ListServiceTitle>

          {new Array(15).fill(0).map(() =>
            <Service>
              <ServiceInformation>
                <ServiceTitle>Corte masculino</ServiceTitle>
                <ServicePrice>R$ 29,90</ServicePrice>
              </ServiceInformation>
              <ScheduleButton onPress={() => setOpenModal(true)}>
                <ServiceText>Agendar</ServiceText>
              </ScheduleButton>
            </Service>
          )}
        </Scroller>

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

      <BackNavPrev onPress={() => navigation.goBack()}>
        <NavPrev width='42.5px' height='42.5px' fill='#fff' />
      </BackNavPrev>

      <BarberModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        user={state}
        service={service}
      />
    </Container>
  );
};

export default BarberDetail;
