import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    backgroundColor: colors.ACCENT,
  },
  topRightBtn: {
    alignItems: 'flex-end',
    margin: 20,
  },
  btnSmallContainer: {
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 28,
  },
  btnContainer: {
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 28,
  },
  bodyContainer: {
    flex: 1,
    margin: 30,
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 45,
    fontFamily: 'SofiaProBold',
  },
  subTitleText: {
    textAlign: 'left',
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'SofiaProMedium',
    lineHeight: 27,
    padding: 5,
    color: '#30384F',
  },
  socialLoginBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default styles;
