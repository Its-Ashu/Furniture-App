import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

const Footer = props => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity onPress={props.onPressHome}>
        {props.homeSelected ? (
          <Image style={styles.homeIcon} source={Theme.icons.HomeBlackIcon} />
        ) : (
          <Image style={styles.homeIcon} source={Theme.icons.HomeIcon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.onPressSave();
          props.navigation;
        }}>
        {props.saveSelected ? (
          <Image style={styles.homeIcon} source={Theme.icons.SaveBlackIcon} />
        ) : (
          <Image style={styles.homeIcon} source={Theme.icons.SaveIcon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressBell}>
        {props.bellSelected ? (
          <Image
            style={styles.homeIcon}
            source={Theme.icons.NotificationBlackIcon}
          />
        ) : (
          <Image
            style={styles.homeIcon}
            source={Theme.icons.NotificationIcon}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressProfile}>
        {props.profileSelected ? (
          <Image
            style={styles.homeIcon}
            source={Theme.icons.ProfileBlackIcon}
          />
        ) : (
          <Image style={styles.homeIcon} source={Theme.icons.ProfileIcon} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
