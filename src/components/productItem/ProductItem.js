import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';

const ProductItem = props => {
  return (
    <View style={styles.viewMain}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={styles.borderRadius}
          resizeMode={'cover'}
          source={props.image}>
          <TouchableOpacity style={styles.viewBag} onPress={()=>{}}>
            <Image style={styles.bagIcon} source={Theme.icons.BagIcon} />
          </TouchableOpacity>
        </ImageBackground>
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textPrice}>{props.price}</Text>
    </View>
  );
};
export default ProductItem;
