import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Footer} from '../../../components/footer';
import {FavoriteItem} from '../../../components/favoriteItem';
import Theme from '../../../theme/Theme';
import {Button} from '../../../components/button';

const FavoritesScreen = props => {
  const [listOfFavorites, setListOfFavorites] = useState([]);
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
        title: 'Minimal Stand',
        price: '$ 25.00',
        divider: true,
      },
      {
        id: 2,
        image: Theme.images.Favorite2Image,
        title: 'Minimal Stand',
        price: '$ 25.00',
        divider: true,
      },
      {
        id: 3,
        image: Theme.images.Favorite3Image,
        title: 'Minimal Stand',
        price: '$ 25.00',
        divider: true,
      },
      {
        id: 4,
        image: Theme.images.Favorite4Image,
        title: 'Minimal Stand',
        price: '$ 25.00',
      },
    );
    setListOfFavorites(newFavoriteList);
  };
  const renderFavorites = ({item}) => {
    return (
      <FavoriteItem
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        divider={item.divider}
      />
    );
  };

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Favorites</Text>
      </View>
      <FlatList
        data={listOfFavorites}
        renderItem={renderFavorites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i, index) => (index + 1).toString()}
      />
      <Button viewStyle={styles.button} title={'Add all to my cart'} />
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
export default FavoritesScreen;
