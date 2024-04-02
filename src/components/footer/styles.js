import Theme from '../../theme/Theme';
const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.responsiveSize.size30,
    paddingVertical: Theme.responsiveSize.size10,
    backgroundColor: Theme.colors.bgColor1,
    ...Platform.select({
      ios: {},
      android: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 8,
      },
    }),
  },
  homeIcon: {
    height: Theme.responsiveSize.size23,
    width: Theme.responsiveSize.size23,
  },
});

export default styles;
