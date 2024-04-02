import Theme from '../../../theme/Theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor:Theme.colors.bgColor1
  },
  viewHeader:{
    alignItems: 'center',
    paddingVertical:Theme.responsiveSize.size20
  },
  textHeader:{
    fontSize:Theme.responsiveSize.size15,
    fontFamily:Theme.fonts.PoppinsSemibold,
    color:Theme.colors.textColor3,
  },
  viewFooter:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:Theme.responsiveSize.size30,
    paddingVertical:Theme.responsiveSize.size10
  },
  homeIcon:{
    height:Theme.responsiveSize.size25,
    width:Theme.responsiveSize.size25
  },
  button:{
    marginHorizontal:Theme.responsiveSize.size20,
    marginVertical:Theme.responsiveSize.size10
  },
});

export default styles;
