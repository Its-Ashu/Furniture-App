import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';

const FavoriteItem = props => {
  return (
    <View>
      <View style={styles.viewMain}>
        <Image style={styles.mainImage} source={props.image} />
        <View style={styles.viewContainer}>
          <View style={styles.viewRow}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => {}}>
              <Image style={styles.closeIcon} source={Theme.icons.CloseIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textPrice}>{props.price}</Text>
          <View style={styles.viewMainBag}>
            <TouchableOpacity style={styles.viewBag} onPress={() => {}}>
              <Image style={styles.bagIcon} source={Theme.icons.BagIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {props.divider ? (
      <View style={styles.divider} />
      ) : null}
    </View>
  );
};
export default FavoriteItem;
