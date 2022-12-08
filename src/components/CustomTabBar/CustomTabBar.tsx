import { FunctionComponent, useContext } from 'react';
import { AvatarIcon, TabArea, TabItem, TabItemCenter } from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
import { UserContext } from '../../contexts/UserContext';

interface Props {
  navigation: any;
  state: any;
}

const CustomTabBar: FunctionComponent<Props> = (props) => {

  const { state: user } = useContext(UserContext);

  const goTo = (screenName: string) => {
    props.navigation.navigate(screenName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon style={{ opacity: props.state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem style={{ opacity: props.state.index === 1 ? 1 : 0.5 }} onPress={() => goTo('Search')}>
        <SearchIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon width="32" height="32" fill="#4EADBE" />
      </TabItemCenter>
      <TabItem style={{ opacity: props.state.index === 3 ? 1 : 0.5 }} onPress={() => goTo('Favorites')}>
        <FavoriteIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar != '' ?
          <AvatarIcon source={{ uri: user.avatar }} />
          :
          <AccountIcon style={{ opacity: props.state.index === 4 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
        }
      </TabItem>
    </TabArea>
  );
}

export default CustomTabBar;
