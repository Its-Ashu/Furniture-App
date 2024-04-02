import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';

const NotificationItem = props => {
  return (
    <View>
      <View style={styles.viewMain}>
        <Image style={styles.mainImage} source={props.image} />
        <View style={styles.viewContainer}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.subText}>{props.subText}</Text>
          <View style={styles.viewOtherText}>
            <Text
              style={[
                styles.subText,
                {
                  color: props.textNew
                    ? Theme.colors.textColor6
                    : Theme.colors.textColor7,
                },
              ]} >
              {props.otherText}
            </Text>
          </View>
        </View>
      </View>
      {props.divider ? <View style={styles.divider} /> : null}
    </View>
  );
};
export default NotificationItem;
