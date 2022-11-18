import {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import styles from 'src/styles/Global.styles';
import {Logo} from 'src/assets/images';
import routes from 'src/constants/routes';

interface SplashScreenInterface {
  navigation: any;
}

const SplashScreen: FC<SplashScreenInterface> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.WELCOME);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.splashScreenContainer}>
      <Logo width={182} height={163} />
    </SafeAreaView>
  );
};

export default SplashScreen;
