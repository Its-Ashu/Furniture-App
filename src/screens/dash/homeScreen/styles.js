import Theme from '../../../theme/Theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor:Theme.colors.bgColor1
  },
  viewHeader:{
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal:Theme.responsiveSize.size20,
    marginVertical:Theme.responsiveSize.size20
  },
  searchIcon:{
    height:Theme.responsiveSize.size22,
    width:Theme.responsiveSize.size22,
  },
  viewTextHeader:{
    flex: 1,
    alignItems: 'center',
    marginTop: Theme.responsiveSize.size06,
  },
  textHeader:{
    fontSize:Theme.responsiveSize.size13,
    fontFamily:Theme.fonts.PoppinsRegular,
    color:Theme.colors.textColor4,
    marginVertical:-6
  },
  scrollView:{
    flexGrow:1,
    paddingTop:Theme.responsiveSize.size15,
    paddingBottom:Theme.responsiveSize.size50,
  },
  viewPH12:{
    paddingHorizontal:Theme.responsiveSize.size12,
  },
  viewMain:{
    paddingHorizontal:Theme.responsiveSize.size10,
    paddingVertical:Theme.responsiveSize.size20,
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
});

export default styles;
