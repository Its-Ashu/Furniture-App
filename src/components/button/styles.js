import Theme from '../../theme/Theme';
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMain:{
    alignItems: 'center',
    borderRadius:Theme.responsiveSize.size06,
    paddingVertical:Theme.responsiveSize.size10,
    backgroundColor:Theme.colors.bgColor3,
  },
  textTitle:{
    fontSize:Theme.responsiveSize.size15,
    fontFamily:Theme.fonts.PoppinsRegular,
    color:Theme.colors.textColor1
  },
});

export default styles;
