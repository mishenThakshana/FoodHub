import {View, Text} from 'react-native';
import {FacebookLogo, GoogleLogo} from 'src/assets/images';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';
import BtnIcon from './BtnIcon';

const SocialLogin = () => {
  return (
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
  );
};

export default SocialLogin;
