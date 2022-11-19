import {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from 'src/styles/Global.styles';
import routes from 'src/constants/routes';
import {
  AlreadyText,
  Btn,
  Message,
  ScreenTitle,
  TopbarImage,
  VerificationCode,
} from 'src/components';
import colors from 'src/constants/colors';

interface VerificationInterface {
  navigation: any;
}

const Verification: FC<VerificationInterface> = ({navigation}) => {
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
        <View style={[styles.bodyContainer, {position: 'relative', top: 50}]}>
          {/* Title */}
          <View>
            <ScreenTitle size={37} title="Verification Code" />
            {/* Message */}
            <Message message="Please type the verification code sent to prelookstudio@gmail.com" />
            {/* Verification pallete */}
            <VerificationCode />
            {/* Already Text */}
            <AlreadyText
              text="I don't received a code!"
              subText="Please resend"
              textColor="#5B5B5E"
              subTextColor={colors.PRIMARY}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
