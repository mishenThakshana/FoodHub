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

interface LoginInterface {
  navigation: any;
}

const Login: FC<LoginInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.rootContainer]}>
      <TopbarImage />
      {/* Back btn */}
      <View style={{alignItems: 'flex-start', margin: 20}}>
        <Btn
          handler={() => navigation.goBack()}
          icon="ios-arrow-back"
          labelColor={colors.SECONDARY}
          color={colors.ACCENT}
        />
      </View>
      <ScrollView>
        <View style={[styles.bodyContainer]}>
          {/* Title */}
          <View>
            <ScreenTitle title="Login" />
            {/* Input Fields */}
            <View style={styles.formInputBlockContainer}>
              <FormInput type="email" placeholder="E-mail" />
              <FormInput type="password" placeholder="Password" />
            </View>
            {/* Forgot Password */}
            <AlreadyText
              subText="Forgot password?"
              textColor="#5B5B5E"
              subTextColor={colors.PRIMARY}
            />
            {/* Submit btn */}
            <View style={styles.submitBtnContainer}>
              <Btn
                handler={() => navigation.navigate(routes.VERIFICATION)}
                label="LOGIN"
                labelColor={colors.ACCENT}
              />
            </View>
            {/* Already Text */}
            <AlreadyText
              text="Don't have an account?"
              subText="Sign Up"
              textColor="#5B5B5E"
              subTextColor={colors.PRIMARY}
            />
            <View style={{marginTop: 40}}>
              {/* Social Login Section */}
              <LineText width={120} text="Sign in with" textColor="#5B5B5E" />
              {/* Social Login */}
              <SocialLogin />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
