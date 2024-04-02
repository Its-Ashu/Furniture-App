import Theme from '../../theme/Theme';
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMain: {
    flexDirection:'row',
    alignItems: 'flex-start',
    paddingHorizontal:Theme.responsiveSize.size20,
    paddingVertical:Theme.responsiveSize.size08
  },
  mainImage: {
    resizeMode:'cover',
    borderRadius:Theme.responsiveSize.size08,
    height: Theme.responsiveSize.size66,
    width: Theme.responsiveSize.size66,
  },
  viewContainer:{
    flex:1,
    marginLeft:Theme.responsiveSize.size15
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor3,
  },
  subText: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor4,
  },
  viewOtherText:{
    alignItems: 'flex-end',
    marginTop:-26
  },
  divider:{
    height:Theme.responsiveSize.size01+0.5,
    backgroundColor:Theme.colors.bgColor7,
    marginVertical:Theme.responsiveSize.size05,
    marginHorizontal:Theme.responsiveSize.size20,
  },
});

export default styles;
