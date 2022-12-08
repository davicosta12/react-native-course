import { FunctionComponent, useState, useEffect } from 'react';

import { Platform, Alert, RefreshControl } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {
  Container,
  HeaderArea,
  HeaderTitle,
  ListArea,
  LoadingIcon,
  LocationArea,
  LocationFinder,
  LocationInput,
  Scroller,
  SearchButton
} from './styles';

import SearchIcon from '../../../assets/search.svg';
import MyLocationIcon from '../../../assets/my_location.svg';
import Api from '../../../Api';
import BarberItem from '../../_commons/BarberItem';

interface Props {
  navigation: any;
}

const Home: FunctionComponent<Props> = (props) => {
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getBarbers();
  }, []);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : 
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if (result == 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getBarbers();
      },
        error => Alert.alert('Error', JSON.stringify(error)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

    }
  }

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;
    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let res = await Api.getBarbers(lat, lng, locationText);
    if (res.error == '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else {
      Alert.alert("Erro: " + res.error);
    }

    setLoading(false);
  }

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  }

  const handleLocationSearch = () => {
    setCoords({} as any);
    getBarbers();
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButton onPress={() => props.navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={t => setLocationText(t)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>

        {loading &&
          <LoadingIcon size="large" color="#FFFFFF" />
        }

        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>

      </Scroller>
    </Container>
  );
};

export default Home;
