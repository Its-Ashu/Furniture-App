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
    height: Theme.responsiveSize.size95,
    width: Theme.responsiveSize.size95,
  },
  viewContainer:{
    flex:1,
    marginLeft:Theme.responsiveSize.size15
  },
  viewRow:{
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor4,
  },
  closeIcon: {
    height: Theme.responsiveSize.size25,
    width: Theme.responsiveSize.size25,
  },
  textPrice: {
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor5,
  },
  viewMainBag:{
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewBag: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: Theme.colors.bgColor7,
    padding: Theme.responsiveSize.size05,
    borderRadius: Theme.responsiveSize.size04,
  },
  bagIcon: {
    height: Theme.responsiveSize.size18,
    width: Theme.responsiveSize.size18,
  },
  divider:{
    height:Theme.responsiveSize.size01+0.5,
    backgroundColor:Theme.colors.bgColor7,
    marginVertical:Theme.responsiveSize.size05,
    marginHorizontal:Theme.responsiveSize.size20,
  },
});

export default styles;
