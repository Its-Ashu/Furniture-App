import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {ShippingItem} from '../../../components/shippingItem';

const ShippingScreen = props => {
  const [listOfShippingAddress, setListOfShippingAddress] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  };
  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newList = [];
    newList.push(
      {
        id: 1,
        textTitle: 'Bruno Fernandes',
        subText: '25 rue Robert Latouche, Nice, 06200, Côte Dazur, France',
      },
      {
        id: 2,
        textTitle: 'Bruno Fernandes',
        subText: '25 rue Robert Latouche, Nice, 06200, Côte Dazur, France',
      },
      {
        id: 3,
        textTitle: 'Bruno Fernandes',
        subText: '25 rue Robert Latouche, Nice, 06200, Côte Dazur, France',
      },
    );
    setListOfShippingAddress(newList);
  };

  const renderItem = ({item, id}) => {
    return (
      <ShippingItem
        id={item.id}
        textTitle={item.textTitle}
        subText={item.subText}
        toggleCheck={toggleCheck}
        isCheck={isCheck}
      />
    );
  };

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ProfileScreen');
          }}>
          <Image style={styles.leftIcon} source={Theme.icons.LeftIcon} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Shipping address</Text>
      </View>
      <FlatList
        data={listOfShippingAddress}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i, index) => (index + 1).toString()}
      />
    </SafeAreaView>
  );
};
export default ShippingScreen;
