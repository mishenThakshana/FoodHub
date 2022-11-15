import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
