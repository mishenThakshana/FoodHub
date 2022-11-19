import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  Welcome,
  Signup,
  Login,
  Verification,
} from 'src/screens/auth';
import routes from 'src/constants/routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={routes.WELCOME} component={Welcome} />
      <Stack.Screen name={routes.SIGNUP} component={Signup} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.VERIFICATION} component={Verification} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
