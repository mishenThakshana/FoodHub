import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  Welcome,
  Signup,
  Login,
  Verification,
  ResetPassword,
  PhoneRegistration,
} from 'src/screens/auth';
import routes from 'src/constants/routes';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={routes.WELCOME} component={Welcome} />
      <Stack.Screen name={routes.SIGNUP} component={Signup} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.VERIFICATION} component={Verification} />
      <Stack.Screen name={routes.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen
        name={routes.PHONE_REGISTRATION}
        component={PhoneRegistration}
      />
      <Stack.Screen name={routes.MAIN_NAVIGATOR} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
