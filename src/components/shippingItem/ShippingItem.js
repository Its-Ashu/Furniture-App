import React from 'react';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';
import {Button} from '../button';

const ShippingItem = props => {
  return (
    <View style={styles.viewMain}>
      <View
        style={[styles.viewRow, {marginVertical: Theme.responsiveSize.size08}]}>
        <TouchableOpacity onPress={props.toggleCheck}>
          <Image
            style={styles.checkIcon}
            source={
              props.isCheck === true
                ? Theme.icons.CheckIcon
                : Theme.icons.UnCheckIcon
            }
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: Theme.responsiveSize.size15,
              fontFamily: Theme.fonts.PoppinsRegular,
              color: props.isCheck === true ? Theme.colors.textColor3 : Theme.colors.textColor4
            },
          ]}>
          Use as the shipping address
        </Text>
      </View>
      <View style={styles.viewCard}>
        <Text style={styles.textTitle}>{props.textTitle}</Text>
        <View style={styles.divider} />
        <Text style={styles.subText}>{props.subText}</Text>
      </View>
    </View>
  );
};
export default ShippingItem;
