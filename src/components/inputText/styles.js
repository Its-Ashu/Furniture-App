import Theme from '../../theme/Theme';
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  viewMain:{
    borderColor: Theme.colors.borderColor3,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size03,
    paddingHorizontal: Theme.responsiveSize.size12,
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor4,
    marginTop:Theme.responsiveSize.size08,
  },
  viewRow:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:-15,
    marginBottom:-10,
  },
  icon:{
    alignItems: 'flex-end',
    height:Theme.responsiveSize.size22,
    width:Theme.responsiveSize.size22,
    marginBottom:Theme.responsiveSize.size40
  },
  textInput: {
    flex:1,
    color: Theme.colors.textColor3,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.PoppinsRegular,
    marginHorizontal:-5,
  },
  textError:{
    color:'red',
    fontSize:Theme.responsiveSize.size10,
    fontFamily: Theme.fonts.PoppinsRegular,
    marginTop:Theme.responsiveSize.size03,
  },
});

export default styles;
