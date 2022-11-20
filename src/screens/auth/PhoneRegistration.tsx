import {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from 'src/styles/Global.styles';
import routes from 'src/constants/routes';
import {
  Btn,
  Message,
  PhoneField,
  ScreenTitle,
  TopbarImage,
} from 'src/components';
import colors from 'src/constants/colors';

interface PhoneRegistrationInterface {
  navigation: any;
}

const PhoneRegistration: FC<PhoneRegistrationInterface> = ({navigation}) => {
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
          <ScreenTitle size={37} title="Registration" />
          {/* Message */}
          <Message
            message={`Enter your phone number to verify ${`\n`}your account`}
          />
          {/* Input */}
          <PhoneField />
          {/* Submit btn */}
          <View style={[styles.submitBtnContainer, {zIndex: -5}]}>
            <Btn label="SEND" labelColor={colors.ACCENT} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneRegistration;
