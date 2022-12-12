import { useNavigation } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import Stars from './Stars';

interface Props {
  data: any
}

const Area = styled.View`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const SeeProfileButton = styled.TouchableOpacity`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;

const BarberItem: FunctionComponent<Props> = (props) => {

  const { data } = props;

  const navigation = useNavigation();

  const handleBarberDetail = () => {
    navigation.navigate("BarberDetail" as never,
      { state: { ...data } } as never);
  }

  return (
    <Area>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber />

        <SeeProfileButton onPress={handleBarberDetail}>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};

export default BarberItem;