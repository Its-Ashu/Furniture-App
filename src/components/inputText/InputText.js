import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

const InputText = props => {
  return (
    <View
      style={{
        marginBottom: Theme.responsiveSize.size15,
      }}>
      <View style={styles.viewMain}>
        <Text style={styles.textTitle}>{props.textTitle}</Text>
        <View style={styles.viewRow}>
          <TextInput
            style={styles.textInput}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={Theme.colors.textColor4}
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secure}
          />
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={props.onPress}>
            {props.isPassword ? (
              <Image
                style={styles.icon}
                resizeMode={'contain'}
                source={
                  props.secure ? Theme.icons.EyeOnIcon : Theme.icons.EyeOffIcon
                }
              />
            ) : (
              <Image
                style={styles.icon}
                resizeMode={'cover'}
                source={
                  props.isEmail
                    ? Theme.icons.ArrowIcon
                    : Theme.icons.DefaultIcon
                }
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {props.error ? <Text style={styles.textError}>{props.error}</Text> : null}
    </View>
  );
};
export default InputText;
