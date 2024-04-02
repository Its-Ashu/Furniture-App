import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {OrderItem} from '../../../components/orderItem';

const OrderScreen = props => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newList = [];
    newList.push(
      {
        id: 1,
        orderNo: 'Order No238562312',
        date: '20/03/2020',
        Quantity: '03',
        price: '$150',
        shipping: 'Canceled',
        isProcessing: false,
      },
      {
        id: 2,
        orderNo: 'Order No238562312',
        date: '20/03/2020',
        Quantity: '03',
        price: '$150',
        shipping: 'Canceled',
        isProcessing: true,
      },
      {
        id: 3,
        orderNo: 'Order No238562312',
        date: '20/03/2020',
        Quantity: '03',
        price: '$150',
        shipping: 'Delivered',
        isDelivered: true,
        isProcessing: false,
      },
    );
    setListOfOrders(newList);
  };

  const renderItem = ({item}) => {
    return (
      <OrderItem
        id={item.id}
        orderNo={item.orderNo}
        date={item.date}
        Quantity={item.Quantity}
        price={item.price}
        shipping={item.shipping}
        isProcessing={item.isProcessing}
        isDelivered={item.isDelivered}
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
        <Text style={styles.textHeader}>My orders</Text>
      </View>
      <View style={styles.viewMain}>
        <View style={styles.viewTab}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: -3,
            }}>
            <Text style={styles.textMainTab}>Delivered</Text>
            <View style={styles.divider} />
          </View>
          <Text
            style={[
              styles.textMainTab,
              {
                color: Theme.colors.textColor4,
                fontFamily: Theme.fonts.PoppinsRegular,
              },
            ]}>
            Processing
          </Text>
          <Text
            style={[
              styles.textMainTab,
              {
                color: Theme.colors.textColor4,
                fontFamily: Theme.fonts.PoppinsRegular,
              },
            ]}>
            Canceled
          </Text>
        </View>
      </View>
      <FlatList
        data={listOfOrders}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        keyExtractor={(i, index) => (index + 1).toString()}
      />
    </SafeAreaView>
  );
};
export default OrderScreen;
