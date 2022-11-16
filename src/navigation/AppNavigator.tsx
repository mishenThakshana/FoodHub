import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import colors from 'src/constants/colors';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
