import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, Login} from 'src/screens/auth';
import routes from 'src/constants/routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;