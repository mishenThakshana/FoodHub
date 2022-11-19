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
  iconBtnContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  alreadyText: {
    color: colors.ACCENT,
    fontSize: 16,
    fontFamily: 'SofiaProMedium',
  },
  topBarImage: {
    height: 184,
    position: 'absolute',
    top: -70,
  },
  formInputContainer: {marginVertical: 10},
  formInputPlaceholder: {
    color: colors.GRAY,
    fontSize: 16,
    fontFamily: 'SofiaProMedium',
  },
  formInput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.LIGHT_GRAY,
    fontSize: 17,
    paddingHorizontal: 10,
    color: colors.SECONDARY,
    marginTop: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: colors.LIGHT_GRAY,
  },
  submitBtnContainer: {marginHorizontal: 40, marginVertical: 10},
  formInputBlockContainer: {marginVertical: 15},
  message: {
    fontSize: 14,
    fontFamily: 'SofiaProMedium',
    textAlign: 'left',
    color: colors.GRAY,
    marginVertical: 10,
  },
  verificationCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  verificationInputContainer: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.LIGHT_GRAY,
  },
  verificationInput: {
    color: colors.PRIMARY,
    fontSize: 25,
    fontFamily: 'SofiaProBold',
  },
  phoneRegistrationInpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default styles;
