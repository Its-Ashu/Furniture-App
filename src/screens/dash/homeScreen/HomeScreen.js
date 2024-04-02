import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Theme from '../../../theme/Theme';
import {Category} from '../../../components/category';
import {ProductItem} from '../../../components/productItem';
import {Footer} from '../../../components/footer';

const HomeScreen = props => {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [numColumns, setNumColumns] = useState(2);
  const [homeSelected, setHomeSelected] = useState(false);
  const [saveSelected, setSaveSelected] = useState(false);
  const [bellSelected, setBellSelected] = useState(false);
  const [profileSelected, setProfileSelected] = useState(false);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newCategoryList = [];
    newCategoryList.push(
      {
        id: 1,
        title: 'Popular',
        iconWhite: Theme.icons.StarWhiteIcon,
        icon: Theme.icons.StarIcon,
        isSelected: false,
      },
      {
        id: 2,
        title: 'Chair',
        iconWhite: Theme.icons.ChairWhiteIcon,
        icon: Theme.icons.ChairIcon,
        isSelected: false,
      },
      {
        id: 3,
        title: 'Table',
        iconWhite: Theme.icons.TableWhiteIcon,
        icon: Theme.icons.TableIcon,
        isSelected: false,
      },
      {
        id: 4,
        title: 'Armchair',
        iconWhite: Theme.icons.ArmChairWhiteIcon,
        icon: Theme.icons.ArmChairIcon,
        isSelected: false,
      },
      {
        id: 5,
        title: 'Bed',
        iconWhite: Theme.icons.BedWhiteIcon,
        icon: Theme.icons.BedIcon,
        isSelected: false,
      },
      {
        id: 6,
        title: 'Lamp',
        iconWhite: Theme.icons.LampWhiteIcon,
        icon: Theme.icons.LampIcon,
        isSelected: false,
      },
    );
    setListOfCategories(newCategoryList);

    const newProductList = [];
    newProductList.push(
      {
        id: 1,
        image: Theme.images.ProductItem1Image,
        title: 'Black Simple Lamp',
        price: '$ 12.00',
      },
      {
        id: 2,
        image: Theme.images.ProductItem2Image,
        title: 'Minimal Stand',
        price: '$ 25.00',
      },
      {
        id: 3,
        image: Theme.images.ProductItem3Image,
        title: 'Coffee Chair',
        price: '$ 12.00',
      },
      {
        id: 4,
        image: Theme.images.ProductItem4Image,
        title: 'Simple Desk',
        price: '$ 12.00',
      },
      {
        id: 5,
        image: Theme.images.ProductItem1Image,
        title: 'Simple Desk',
        price: '$ 12.00',
      },
      {
        id: 6,
        image: Theme.images.ProductItem2Image,
        title: 'Simple Desk',
        price: '$ 12.00',
      },
    );
    setListOfProduct(newProductList);
  };
  const renderCategories = ({item}) => {
    return (
      <Category
        id={item.id}
        iconWhite={item.iconWhite}
        icon={item.icon}
        title={item.title}
        isSelected={item.isSelected}
        onPress={() => {
          const newList = [...listOfCategories];
          newList.map(_item => {
            if (_item.id === item.id) {
              _item.isSelected = true;
            } else {
              _item.isSelected = false;
            }
          });
          setListOfCategories(newList);
        }}
      />
    );
  };

  const renderProductItem = ({item}) => {
    return (
      <ProductItem
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
      />
    );
  };

  const renderItem = ({item, index}) => {
    if (index === 0) {
      // Render category items horizontally
      return (
        <FlatList
          data={listOfCategories}
          renderItem={renderCategories}
          horizontal
          contentContainerStyle={styles.viewPH12}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(i, index) => (index + 1).toString()}
        />
      );
    } else {
      // Render product items vertically
      return (
        <View style={styles.viewMain}>
          <FlatList
            data={listOfProduct}
            renderItem={renderProductItem}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => (index + 1).toString()}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.searchIcon} source={Theme.icons.SearchIcon} />
        </TouchableOpacity>
        <View style={styles.viewTextHeader}>
          <Text style={styles.textHeader}>MAKE HOME</Text>
          <Text
            style={[
              styles.textHeader,
              {
                fontFamily: Theme.fonts.PoppinsBold,
                fontSize: Theme.responsiveSize.size16,
              },
            ]}>
            BEAUTIFUL
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.searchIcon} source={Theme.icons.CartIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={['categories', 'products']}
        renderItem={renderItem}
        keyExtractor={(i, index) => (index + 1).toString()}
        showsVerticalScrollIndicator={false}
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
export default HomeScreen;
