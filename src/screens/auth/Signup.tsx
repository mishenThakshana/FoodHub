import {FC, useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from 'src/styles/Global.styles';
import routes from 'src/constants/routes';
import {
  AlreadyText,
  Btn,
  FormInput,
  LineText,
  ScreenTitle,
  SocialLogin,
  TopbarImage,
} from 'src/components';
import colors from 'src/constants/colors';

interface SignupInterface {
  navigation: any;
}

const Signup: FC<SignupInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.rootContainer]}>
      <TopbarImage />
      <ScrollView>
        <View style={[styles.bodyContainer, {position: 'relative', top: 40}]}>
          {/* Title */}
          <View>
            <ScreenTitle title="Signup" />
            {/* Input Fields */}
            <View style={styles.formInputBlockContainer}>
              <FormInput placeholder="Full name" />
              <FormInput type="email" placeholder="E-mail" />
              <FormInput type="password" placeholder="Password" />
            </View>
            {/* Submit btn */}
            <View style={styles.submitBtnContainer}>
              <Btn label="SIGN UP" labelColor={colors.ACCENT} />
            </View>
            {/* Already Text */}
            <AlreadyText
              text="Already have an account?"
              subText="Login"
              textColor="#5B5B5E"
              subTextColor={colors.PRIMARY}
            />
            <View style={{marginTop: 40}}>
              {/* Social Login Section */}
              <LineText width={120} text="Sign up with" textColor="#5B5B5E" />
              {/* Social Login */}
              <SocialLogin />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
