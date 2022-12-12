import { FunctionComponent } from "react";
import styled from "styled-components/native";

interface Props {
  data: any
}

const Container = styled.View` 
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: column;
`;

const Header = styled.View`
 flex-direction: row;
 align-items: center;
`;

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

const TextHeader = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

const HaircutContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const HaircutType = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

const HaircutPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

const HaircutDateTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const HaircutDate = styled.TouchableOpacity`
  background-color: #4EADBE;
  padding: 10px 15px;
  border-radius: 10px;
`;

const HaircutDateText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const HaircutTime = styled.TouchableOpacity`
  background-color: #4EADBE;
  padding: 10px 15px;
  border-radius: 10px;
`;

const HaircutTimeText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const AppointmentItem: FunctionComponent<Props> = (props) => {
  const { data } = props;
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: data.avatar }} />
        <TextHeader>{data.name}</TextHeader>
      </Header>

      <HaircutContainer>
        <HaircutType>Corte masculino</HaircutType>
        <HaircutPrice>R$ 29,90</HaircutPrice>
      </HaircutContainer>

      <HaircutDateTime>

        <HaircutDate>
          <HaircutDateText>05/08/2020</HaircutDateText>
        </HaircutDate>

        <HaircutTime>
          <HaircutTimeText>13:00</HaircutTimeText>
        </HaircutTime>

      </HaircutDateTime>
    </Container>
  );
}

export default AppointmentItem;