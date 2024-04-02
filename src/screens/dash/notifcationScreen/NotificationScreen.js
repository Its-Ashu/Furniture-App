import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Footer} from '../../../components/footer';
import Theme from '../../../theme/Theme';
import {NotificationItem} from '../../../components/notificationItem';

const NotificationScreen = props => {
  const [listOfNotificaton, setListOfNotificaton] = useState([]);
  const [homeSelected, setHomeSelected] = useState(false);
  const [saveSelected, setSaveSelected] = useState(false);
  const [bellSelected, setBellSelected] = useState(false);
  const [profileSelected, setProfileSelected] = useState(false);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newFavoriteList = [];
    newFavoriteList.push(
      {
        id: 1,
        image: Theme.images.Favorite1Image,
        title: 'Your order #123456789 has been shipped successfully.',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        divider: true,
        textNew: true,
        otherText: 'New',
      },
      {
        id: 2,
        image: Theme.images.Favorite2Image,
        title: 'Your order #123456789 has been shipped.',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        divider: true,
        textNew: true,
        otherText: 'New',
      },
      {
        id: 3,
        image: Theme.images.Favorite3Image,
        title: 'Your order #123456789 has been confirmed.',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        divider: true,
        otherText: 'Hot',
      },
      {
        id: 4,
        image: Theme.images.ProductItem3Image,
        title: 'Discover hot sale furnitures this week.',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        divider: true,
        otherText: 'Hot',
      },
      {
        id: 5,
        image: Theme.images.Favorite4Image,
        title: 'Your order #123456789 has been canceled.',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    );
    setListOfNotificaton(newFavoriteList);
  };
  const renderFavorites = ({item}) => {
    return (
      <NotificationItem
        id={item.id}
        image={item.image}
        title={item.title}
        subText={item.subText}
        divider={item.divider}
        otherText={item.otherText}
        textNew={item.textNew}
      />
    );
  };

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Notification</Text>
      </View>
      <FlatList
        data={listOfNotificaton}
        renderItem={renderFavorites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i, index) => (index + 1).toString()}
      />
      <Footer
        onPressHome={() => {
          setHomeSelected(true);
          setSaveSelected(false);
          setBellSelected(false);
          setProfileSelected(false);
          props.navigation.navigate('HomeScreen');
        }}
        onPressSave={() => {
          setHomeSelected(false);
          setSaveSelected(true);
          setBellSelected(false);
          setProfileSelected(false);
          props.navigation.navigate('FavoritesScreen');
        }}
        onPressBell={() => {
          setHomeSelected(false);
          setSaveSelected(false);
          setBellSelected(true);
          setProfileSelected(false);
          props.navigation.navigate('NotificationScreen');
        }}
        onPressProfile={() => {
          setHomeSelected(false);
          setSaveSelected(false);
          setBellSelected(false);
          setProfileSelected(true);
          props.navigation.navigate('ProfileScreen');
        }}
        homeSelected={homeSelected}
        saveSelected={saveSelected}
        bellSelected={bellSelected}
        profileSelected={profileSelected}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;
