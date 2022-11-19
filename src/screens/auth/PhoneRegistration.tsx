import {FC} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
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
import {SrilankaImg} from 'src/assets/images';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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
          <View style={styles.phoneRegistrationInpContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <SrilankaImg width={50} height={50} />
              </View>
              <View>
                <MaterialIcon
                  name="arrow-drop-down"
                  size={25}
                  color={colors.GRAY}
                />
              </View>
            </View>
            <View>
              <TextInput
                cursorColor={colors.PRIMARY}
                style={{color: colors.SECONDARY, fontSize: 18}}
              />
            </View>
          </View>
          {/* Submit btn */}
          <View style={styles.submitBtnContainer}>
            <Btn label="SEND" labelColor={colors.ACCENT} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneRegistration;
