import Theme from '../../theme/Theme';
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMain: {
    marginTop: Theme.responsiveSize.size12,
    marginHorizontal: Theme.responsiveSize.size20,
    marginVertical: Theme.responsiveSize.size10,
  },
  checkIcon:{
    height:Theme.responsiveSize.size18,
    width:Theme.responsiveSize.size18,
    marginRight:Theme.responsiveSize.size06
  },
  viewCard:{
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

        elevation: 7,
      },
    }),
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size15+0.5,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor3,
  },
  subText: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor4,
  },
  divider: {
    height: Theme.responsiveSize.size01 + 0.5,
    backgroundColor: Theme.colors.bgColor7,
    marginVertical: Theme.responsiveSize.size10,
    marginHorizontal: -Theme.responsiveSize.size15,
  },
  viewBottom: {
    marginTop: Theme.responsiveSize.size25,
  },
  button: {
    flex:1,
    paddingVertical: Theme.responsiveSize.size06,
    borderRadius: Theme.responsiveSize.size08,
  },
  clockIcon: {
    height: Theme.responsiveSize.size20,
    width: Theme.responsiveSize.size20,
    marginHorizontal:Theme.responsiveSize.size04
  },
});

export default styles;
