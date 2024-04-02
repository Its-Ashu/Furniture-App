import Theme from '../../../theme/Theme';

const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor1,
  },
  viewHeader: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Theme.responsiveSize.size20,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  leftIcon:{
    height:Theme.responsiveSize.size18,
    width:Theme.responsiveSize.size18,
  },
  textHeader: {
    flex:1,
    textAlign:'center',
    fontSize: Theme.responsiveSize.size15,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor3,
  },
  viewMain: {
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewTab:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  divider:{
    backgroundColor:Theme.colors.bgColor3,
    height:Theme.responsiveSize.size03,
    width:Theme.responsiveSize.size35,
    borderRadius:Theme.responsiveSize.size30
  },
  textMainTab:{
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor3,
    marginBottom:Theme.responsiveSize.size01
  },
  viewCard: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop:Theme.responsiveSize.size12,
    borderRadius: Theme.responsiveSize.size05,
    padding: Theme.responsiveSize.size15,
    backgroundColor: Theme.colors.bgColor1,
    ...Platform.select({
      ios: {},
      android: {
        shadowColor: Theme.colors.bgColor5,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 6,
      },
    }),
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size15+0.5,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor5,
    marginBottom:Theme.responsiveSize.size01
  },
  subText: {
    fontSize: Theme.responsiveSize.size11,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor8,
    marginTop:Theme.responsiveSize.size01
  },
  
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.responsiveSize.size30,
    paddingVertical: Theme.responsiveSize.size10,
  },
  homeIcon: {
    height: Theme.responsiveSize.size25,
    width: Theme.responsiveSize.size25,
  },
});

export default styles;
