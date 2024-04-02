import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

const Category = props => {
  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={props.onPress}>
      <View
        style={[
          styles.viewCategory,
          {
            borderRadius: Theme.responsiveSize.size10,
            backgroundColor: props.isSelected
              ? Theme.colors.bgColor3
              : Theme.colors.bgColor6,
          },
        ]}>
        <Image
          style={styles.icon}
          source={props.isSelected ? props.iconWhite : props.icon}
        />
      </View>
      <Text
        style={[
          styles.textTitle,
          {
            color: props.isSelected
              ? Theme.colors.textColor3
              : Theme.colors.textColor4,
          },
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default Category;
