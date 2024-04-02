import Theme from '../../theme/Theme';
const {StyleSheet, Dimensions} = require('react-native');

const {width} = Dimensions.get('window');
const imageSize = (width - Theme.responsiveSize.size60) / 2;

const styles = StyleSheet.create({
  viewMain: {
    paddingBottom: Theme.responsiveSize.size10,
    paddingHorizontal:Theme.responsiveSize.size10
  },
  borderRadius:{
    borderRadius:Theme.responsiveSize.size08
  },
  mainImage: {
    resizeMode:'cover',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: imageSize,
    height: Theme.responsiveSize.size180,
  },
  viewBag: {
    backgroundColor: Theme.colors.bgColor7,
    padding: Theme.responsiveSize.size05,
    borderRadius: Theme.responsiveSize.size04,
    margin: Theme.responsiveSize.size10,
  },
  bagIcon: {
    height: Theme.responsiveSize.size18,
    width: Theme.responsiveSize.size18,
  },
  textTitle: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.textColor4,
    paddingTop:Theme.responsiveSize.size10
  },
  textPrice: {
    fontSize: Theme.responsiveSize.size13,
    fontFamily: Theme.fonts.PoppinsSemibold,
    color: Theme.colors.textColor5,
    paddingTop:Theme.responsiveSize.size01
  },
});

export default styles;
