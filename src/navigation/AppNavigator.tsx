import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import colors from 'src/constants/colors';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigator = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    AsyncStorage.getItem('app_user').then(user => {
      user && setAuthenticated(true);
      RNBootSplash.hide({fade: true});
    });
  }, []);
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        {authenticated ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
