import {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {BackgroundImg} from 'src/assets/images';
import {Btn, LineText, AlreadyText, SocialLogin} from 'src/components';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';
import LinearGradient from 'react-native-linear-gradient';
import routes from 'src/constants/routes';

interface WelcomeInterface {
  navigation: any;
}

const Welcome: FC<WelcomeInterface> = ({navigation}) => {
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
          <LineText width={120} text="sign in with" textColor={colors.ACCENT} />
          {/* Social Login */}
          <SocialLogin />
          {/* Other options */}
          <Btn
            handler={() => navigation.navigate(routes.SIGNUP)}
            color="rgba(255,255,255, 0.2)"
            label="Start with email or phone"
            labelColor={colors.ACCENT}
            transparent={true}
            borderColor={colors.ACCENT}
          />
          {/* Already Text */}
          <AlreadyText
            text="Already have an account?"
            subText="Sign In"
            underline
            textColor={colors.ACCENT}
            subTextColor={colors.ACCENT}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
