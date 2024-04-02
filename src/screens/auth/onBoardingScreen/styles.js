import Theme from '../../../theme/Theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor:Theme.colors.bgColor1
  },
  mainImage:{
    height: '100%',
    width: '100%',
    resizeMode:'cover',
  },
  viewMain:{
    flex:1,
    paddingHorizontal:Theme.responsiveSize.size20,
    marginTop:Theme.responsiveSize.size60,
  },
  textTitle:{
    fontSize:Theme.responsiveSize.size26,
    fontFamily:Theme.fonts.PoppinsSemibold,
    marginRight:Theme.responsiveSize.size40*2,
    lineHeight:Theme.responsiveSize.size30,
    color:Theme.colors.textColor3
  },
  textSubTitle:{
    fontSize:Theme.responsiveSize.size13,
    fontFamily:Theme.fonts.PoppinsRegular,
    marginRight:Theme.responsiveSize.size12,
    marginTop:Theme.responsiveSize.size13,
    color:Theme.colors.textColor4
  },
  viewButton:{
    marginHorizontal:Theme.responsiveSize.size20,
    marginVertical:Theme.responsiveSize.size10
  },
});

export default styles;
