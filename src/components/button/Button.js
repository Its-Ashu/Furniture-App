import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.viewMain, props.viewStyle]} onPress={props.onPress}>
        <Text style={styles.textTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
