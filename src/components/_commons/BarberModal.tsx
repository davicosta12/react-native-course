import { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ExpandedIcon from '../../assets/expand.svg';

import NavNextIcon from '../../assets/nav_next.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';

interface Props {
  openModal: boolean;
  setOpenModal: any;
  user: any;
  service: any;
}

interface ModalItemProps {
  justifyContent: string;
}

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, .5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #83D6E3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;

const BarberInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BarberAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

const BarberName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const HairCutInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HairCutName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const HairCutPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const FinalizeBtn = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const FinalizeText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

const DateInfo = styled.View`
  flex-direction: row;
`;

const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DateTitleArea = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`;

const DateTitle = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: bold;
`;

const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

const DateList = styled.ScrollView``;

const DateItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const TimeList = styled.ScrollView``;

const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const TimeItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

const days = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
];

const hours = [
  '13:00',
  '14:00',
  '15:00',
  '18:00',
  '19:00',
  '20:00',
  '22:00'
];

const BarberModal: FunctionComponent<Props> = (props) => {

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState<any>(null);
  const [listDays, setListDays] = useState<any[]>([]);
  const [listHours, setListHours] = useState<any[]>([]);

  const { openModal, setOpenModal, user, service } = props;

  useEffect(() => {
    const daysInMounth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const newListDays: any[] = [];

    for (let i = 1; i <= daysInMounth; i++) {
      let d = new Date(selectedYear, selectedMonth, i);
      let year = d.getFullYear();
      let month: any = d.getMonth() + 1;
      let day: any = d.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      let selDate = year + '-' + month + '-' + day;

      newListDays.push({
        status: true,
        weekDay: days[d.getDay()],
        number: i
      });
    }

    setListDays(newListDays);
    setSelectedDay(0);
    setListHours([]);
    setSelectedHour(0);
  }, [user, selectedMonth, selectedYear]);

  useEffect(() => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDay());
  }, []);

  useEffect(() => {
    if (selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month: any = d.getMonth() + 1;
      let day: any = d.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      let selDate = year + '-' + month + '-' + day;

      setListHours(hours);
    }

    setSelectedHour(null);
  }, [user, selectedDay]);

  const handleLeftDateClick = () => {
    const mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  const handleRightDateClick = () => {
    const mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  return (
    <Modal
      transparent
      visible={openModal}
      animationType='slide'
    >
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={() => setOpenModal(false)}>
            <ExpandedIcon width="40px" height="40px" fill="#000" />
          </CloseButton>

          <ModalItem>
            <BarberInfo>
              <BarberAvatar source={{ uri: user?.avatar }} />
              <BarberName>{user.name}</BarberName>
            </BarberInfo>
          </ModalItem>

          <ModalItem>
            <HairCutInfo>
              <HairCutName>Corte masculino</HairCutName>
              <HairCutPrice>R$ 29,90</HairCutPrice>
            </HairCutInfo>
          </ModalItem>

          <ModalItem>
            <DateInfo>
              <DatePrevArea onPress={handleLeftDateClick}>
                <NavPrevIcon width='35px' height='35px' fill='#000' />
              </DatePrevArea>

              <DateTitleArea>
                <DateTitle>{months[selectedMonth]} {selectedYear}</DateTitle>
              </DateTitleArea>

              <DateNextArea onPress={handleRightDateClick}>
                <NavNextIcon width='35px' height='35px' fill='#000' />
              </DateNextArea>
            </DateInfo>
            <DateList horizontal showsHorizontalScrollIndicator>
              {listDays.map((item, key) => (
                <DateItem
                  key={key}
                  onPress={() => item.status ? setSelectedDay(item.number) : null}
                  style={{
                    opacity: item.status ? 1 : .5,
                    backgroundColor: item.number === selectedDay ? '#4EADBE' : '#FFF'
                  }}
                >
                  <DateItemWeekDay
                    style={{
                      color: item.number === selectedDay ? '#FFF' : '#000'
                    }}
                  >{item.weekDay}</DateItemWeekDay>
                  <DateItemNumber
                    style={{
                      color: item.number === selectedDay ? '#FFF' : '#000'
                    }}
                  >{item.number}</DateItemNumber>
                </DateItem>
              ))}
            </DateList>
          </ModalItem>

          {listHours?.length > 0 && selectedDay > 0 &&
            <ModalItem>
              <TimeList horizontal showsHorizontalScrollIndicator>
                {listHours.map((item: any, key: number) => (
                  <TimeItem
                    key={key}
                    onPress={() => setSelectedHour(item)}
                    style={{
                      backgroundColor: item === selectedHour ? '#4EADBE' : '#FFF'
                    }}
                  >
                    <TimeItemText
                      style={{
                        color: item === selectedHour ? '#FFF' : '#000',
                        fontWeight: item === selectedHour ? 'bold' : 'normal'
                      }}
                    >{item}</TimeItemText>
                  </TimeItem>
                ))}
              </TimeList>
            </ModalItem>
          }

          <FinalizeBtn>
            <FinalizeText>Finalizar Agendamento</FinalizeText>
          </FinalizeBtn>

        </ModalBody>
      </ModalArea>
    </Modal >
  );
};

export default BarberModal;