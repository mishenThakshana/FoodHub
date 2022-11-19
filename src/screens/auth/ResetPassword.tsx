import {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from 'src/styles/Global.styles';
import routes from 'src/constants/routes';
import {
  Btn,
  ClassicInput,
  Message,
  ScreenTitle,
  TopbarImage,
} from 'src/components';
import colors from 'src/constants/colors';

interface ResetPasswordInterface {
  navigation: any;
}

const ResetPassword: FC<ResetPasswordInterface> = ({navigation}) => {
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

      <View style={[styles.bodyContainer, {position: 'relative', top: 50}]}>
        {/* Title */}
        <View>
          <ScreenTitle size={37} title="Reset Password" />
          {/* Message */}
          <Message
            message={`Please enter your email address to ${`\n`}request a password reset`}
          />
          {/* Input */}
          <ClassicInput type="email" />
          {/* Submit btn */}
          <View style={styles.submitBtnContainer}>
            <Btn
              handler={() => navigation.navigate(routes.PHONE_REGISTRATION)}
              label="SEND NEW PASSWORD"
              labelColor={colors.ACCENT}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
