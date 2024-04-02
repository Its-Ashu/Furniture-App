import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Footer} from '../../../components/footer';
import Theme from '../../../theme/Theme';

const ProfileScreen = props => {
  const [homeSelected, setHomeSelected] = useState(false);
  const [saveSelected, setSaveSelected] = useState(false);
  const [bellSelected, setBellSelected] = useState(false);
  const [profileSelected, setProfileSelected] = useState(false);

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Profile</Text>
      </View>
      <View style={styles.viewMain}>
        <View style={styles.viewProfile}>
          <Image
            style={styles.imageProfile}
            resizeMode={'contain'}
            source={{
              uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
            }}
          />
          <View style={{flex: 1, marginLeft: Theme.responsiveSize.size18}}>
            <Text style={styles.textName}>Kristin Watson</Text>
            <Text style={styles.textEmail}>bruno203@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.viewCard, {marginTop: Theme.responsiveSize.size26}]} onPress={()=>{
            props.navigation.navigate('OrderScreen')
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.textTitle}>My orders</Text>
            <Text style={styles.subText}>Already have 10 orders</Text>
          </View>
          <View>
            <Image style={styles.nextIcon} source={Theme.icons.NextIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewCard} onPress={()=>{
            props.navigation.navigate('ShippingScreen')
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.textTitle}>Shipping Addresses</Text>
            <Text style={styles.subText}>03 Addresses</Text>
          </View>
          <View>
            <Image style={styles.nextIcon} source={Theme.icons.NextIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewCard} onPress={()=>{
            props.navigation.navigate('')
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.textTitle}>Payment Method</Text>
            <Text style={styles.subText}>You have 2 cards</Text>
          </View>
          <View>
            <Image style={styles.nextIcon} source={Theme.icons.NextIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewCard} onPress={()=>{
            props.navigation.navigate('')
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.textTitle}>My reviews</Text>
            <Text style={styles.subText}>Reviews for 5 items</Text>
          </View>
          <View>
            <Image style={styles.nextIcon} source={Theme.icons.NextIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewCard} onPress={()=>{
            props.navigation.navigate('')
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.textTitle}>Setting</Text>
            <Text style={styles.subText}>Notification, Password, FAQ, Contact</Text>
          </View>
          <View>
            <Image style={styles.nextIcon} source={Theme.icons.NextIcon} />
          </View>
        </TouchableOpacity>
      </View>
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
export default ProfileScreen;
