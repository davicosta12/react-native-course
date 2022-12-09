import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
`;

export const DetailArea = styled.View`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 50px;
  background-color: #fff;
  padding: 0 30px;
`;

export const BarberInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-top: -10%;
`;

export const NameBarber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-top: 18%;
`

export const NameStars = styled.View`
  justify-content: space-between;
`

export const ButtonFavorite = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  border-radius: 80px;
  elevation: 3;
`

export const ListServiceTitle = styled.Text`
  margin: 30px 0 12px 0;
  color: #268596;
  font-size: 18px;
  font-weight: bold;
`;

export const Service = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ServiceInformation = styled.View``;

export const ServiceTitle = styled.Text`
  color: #268596;
  font-size: 16px;
  font-weight: bold;
`;

export const ServicePrice = styled.Text`
  color: #268596;
  font-size: 14px;
  margin-top: 5px;
`;

export const ScheduleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 91px;
  background-color: #268596;
  border-radius: 10px;
`;

export const ServiceText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const FeedBackContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const FeedBackCard = styled.View`
  background-color: #268596;
  height: 94px;
  width: 316px;
  padding: 15px;
  border-radius: 10px;
`;

export const FeedBackHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FeedBackTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const FeedBackDescription = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 7px;
  word-wrap: break-word;
`;

export const FeedBackNavPrev = styled.TouchableOpacity`
  width: 43.4px;
  height: 43.4px;
  position: absolute;
  top: 0;
  left: 15px;
`;

export const FeedBackNavNext = styled.TouchableOpacity`
  background-color: #fff;
  width: 35px;
  height: 35px;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  maring: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View``;