import Theme from '../../../theme/Theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor:Theme.colors.bgColor1
  },
  scrollView:{
    flexGrow:1,
    paddingBottom:Theme.responsiveSize.size50
  },
  viewMain:{
    paddingHorizontal:Theme.responsiveSize.size20,
  },
  viewTop:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Theme.responsiveSize.size40,
  },
  viewRow:{
    flexDirection:'row',
    alignItems: 'center',
  },
  viewLine:{
    flex:1,
    backgroundColor:Theme.colors.bgColor4,
    height:Theme.responsiveSize.size01+0.5,
  },
  appImage:{
    height:Theme.responsiveSize.size60,
    width:Theme.responsiveSize.size60,
    marginHorizontal:Theme.responsiveSize.size20
  },
  textTitle:{
    textAlign:'center',
    fontSize:Theme.responsiveSize.size26,
    fontFamily:Theme.fonts.PoppinsSemibold,
    marginHorizontal:Theme.responsiveSize.size45,
    marginTop:Theme.responsiveSize.size40,
    lineHeight:Theme.responsiveSize.size30,
    color:Theme.colors.textColor3,
  },
  viewMid:{
    backgroundColor:Theme.colors.bgColor1,
    marginVertical:Theme.responsiveSize.size25,
    padding:Theme.responsiveSize.size15,
    paddingVertical:Theme.responsiveSize.size30,
    shadowColor:Theme.colors.bgColor5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 2,
  },
  subText:{
    textAlign:'center',
    fontSize:Theme.responsiveSize.size13,
    fontFamily:Theme.fonts.PoppinsLight,
    color:Theme.colors.textColor4,
  },
  viewMV10:{
    marginVertical:Theme.responsiveSize.size10
  },
});

export default styles;
