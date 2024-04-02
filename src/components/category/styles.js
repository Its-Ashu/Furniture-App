import Theme from '../../theme/Theme';
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewCategory:{
    alignItems: 'center',
    backgroundColor:Theme.colors.bgColor6,
    padding:Theme.responsiveSize.size07,
    marginHorizontal:Theme.responsiveSize.size12,
    marginBottom:Theme.responsiveSize.size05
  },
  icon:{
    height:Theme.responsiveSize.size26,
    width:Theme.responsiveSize.size26,
  },
  textTitle:{
    fontSize:Theme.responsiveSize.size13,
    fontFamily:Theme.fonts.PoppinsRegular,
    color:Theme.colors.textColor3
  },
});

export default styles;
