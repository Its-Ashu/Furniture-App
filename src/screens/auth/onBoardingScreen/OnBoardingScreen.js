import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {Button} from '../../../components/button';

const OnBoardingScreen = props => {
  return (
    <>
      <SafeAreaView style={styles.viewMainContainer}>
        <ImageBackground
          style={styles.mainImage}
          source={Theme.images.OnBoardingImage}>
          <View style={styles.viewMain}>
            <Text style={styles.textTitle}>MAKE YOUR HOME BEAUTIFUL</Text>
            <Text style={styles.textSubTitle}>
              The best simple place where you discover most wonderful furnitures
              and make your home beautiful
            </Text>
          </View>
          <Button
            viewStyle={styles.viewButton}
            title="Get Started"
            onPress={() => {
              props.navigation.navigate('LoginScreen');
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default OnBoardingScreen;
