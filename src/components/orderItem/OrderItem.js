import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';
import {Button} from '../button';

const OrderItem = props => {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewRow}>
        <Text style={[styles.textTitle, {flex: 1}]}>{props.orderNo}</Text>
        <Text style={styles.subText}>{props.date}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.viewRow}>
        <Text style={[styles.subText, {fontSize: Theme.responsiveSize.size14}]}>
          Quantity:{' '}
        </Text>
        <Text
          style={[
            styles.textTitle,
            {flex: 1, fontFamily: Theme.fonts.PoppinsSemibold},
          ]}>
          {props.Quantity}
        </Text>
        <Text style={[styles.subText, {fontSize: Theme.responsiveSize.size14}]}>
          Total Amount:{' '}
        </Text>
        <Text
          style={[styles.textTitle, {fontFamily: Theme.fonts.PoppinsSemibold}]}>
          {props.price}
        </Text>
      </View>
      <View style={[styles.viewRow, styles.viewBottom]}>
        <Button viewStyle={styles.button} title={'Detail'} />
        <View style={{flex: 1}} />
        {props.isProcessing ? (
          <View style={styles.viewRow}>
            <Image style={styles.clockIcon} source={Theme.icons.ClockIcon} />
            <Text style={[styles.textTitle, {color: Theme.colors.textColor9}]}>
              Processing
            </Text>
          </View>
        ) : (
          <View style={styles.viewRow}>
            <Image style={styles.clockIcon} source={Theme.icons.DefaultIcon} />
            <Text
              style={[
                styles.textTitle,
                {
                  color: props.isDelivered
                    ? Theme.colors.textColor6
                    : Theme.colors.textColor7,
                },
              ]}>
              {props.shipping}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default OrderItem;
