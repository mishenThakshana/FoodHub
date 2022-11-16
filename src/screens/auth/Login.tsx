import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {BackgroundImg, FacebookLogo, GoogleLogo} from 'src/assets/images';
import {Btn, BtnIcon, LineText} from 'src/components';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Background Image */}
      <ImageBackground
        style={{position: 'absolute', height, width}}
        source={BackgroundImg}
        resizeMode="cover"
      />
      {/* Skip btn top right */}
      <View style={styles.topRightBtn}>
        <Btn
          color={colors.ACCENT}
          size="sm"
          label="Skip"
          labelColor={colors.PRIMARY}
        />
      </View>
      {/* Gradient effect */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
        style={{position: 'absolute', width, height}}></LinearGradient>
      {/* Body content */}
      <View style={styles.bodyContainer}>
        {/* Title & subtitle section */}
        <View>
          <Text style={[styles.screenTitle, {color: colors.SECONDARY}]}>
            Welcome to
          </Text>
          <Text style={[styles.screenTitle, {color: colors.PRIMARY}]}>
            FoodHub
          </Text>
          <Text style={styles.subTitleText}>
            Your favourite foods delivered {'\n'}fast at your door.
          </Text>
        </View>
        {/* Login pallet */}
        <View>
          <LineText width={120} text="sign in with" />
          {/* Social Login */}
          <View style={styles.socialLoginBtnContainer}>
            <BtnIcon
              color={colors.ACCENT}
              label="FACEBOOK"
              image={<FacebookLogo width={30} height={30} />}
              size={25}
            />
            <BtnIcon
              color={colors.ACCENT}
              label="GOOGLE"
              image={<GoogleLogo width={30} height={30} />}
              size={30}
            />
          </View>
          {/* Other options */}
          <Btn
            color="rgba(255,255,255, 0.2)"
            label="Start with email or phone"
            labelColor={colors.ACCENT}
            transparent={true}
            borderColor={colors.ACCENT}
          />
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Text
              style={{
                color: colors.ACCENT,
                fontSize: 16,
                fontFamily: 'SofiaProMedium',
              }}>
              Already have an account?{` `}
              <Text style={{textDecorationLine: 'underline'}}>Sign In</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
