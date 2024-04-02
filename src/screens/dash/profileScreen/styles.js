import Theme from '../../../theme/Theme';

const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor1,
  },
  viewHeader: {
    alignItems: 'center',
    paddingVertical: Theme.responsiveSize.size20,
  },
  textHeader: {
    fontSize: Theme.responsiveSize.size15,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor3,
  },
  viewMain: {
    flex:1,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    height: Theme.responsiveSize.size70,
    width: Theme.responsiveSize.size70,
    borderRadius: Theme.responsiveSize.size70,
  },
  textName: {
    fontSize: Theme.responsiveSize.size17+0.5,
    fontFamily: Theme.fonts.PoppinsBold,
    color: Theme.colors.textColor5,
    marginBottom: -2,
  },
  textEmail: {
    fontSize: Theme.responsiveSize.size12 + 0.5,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor8,
    marginTop: -2,
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
  nextIcon:{
    height:Theme.responsiveSize.size18,
    width:Theme.responsiveSize.size18,
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
