import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, WELCOME, SIGNUP} from 'src/screens/auth';
import routes from 'src/constants/routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={routes.WELCOME} component={WELCOME} />
      <Stack.Screen name={routes.SIGNUP} component={SIGNUP} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
