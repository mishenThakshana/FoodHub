import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import colors from 'src/constants/colors';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
