import {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    let obj = {fullName, email, password};
    AsyncStorage.setItem('app_user', JSON.stringify(obj));
  };

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
              <FormInput
                handler={setFullName}
                placeholder="Full name"
                value={fullName}
              />
              <FormInput
                handler={setEmail}
                type="email"
                placeholder="E-mail"
                value={email}
              />
              <FormInput
                handler={setPassword}
                type="password"
                placeholder="Password"
                value={password}
              />
            </View>
            {/* Submit btn */}
            <View style={styles.submitBtnContainer}>
              <Btn
                handler={handleSignup}
                label="SIGN UP"
                labelColor={colors.ACCENT}
              />
            </View>
            {/* Already Text */}
            <AlreadyText
              handler={() => navigation.navigate(routes.LOGIN)}
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
