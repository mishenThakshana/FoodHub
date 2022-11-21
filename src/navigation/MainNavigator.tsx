import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Location,
  Cart,
  Favourites,
  Notifications,
} from 'src/screens/main';
import routes from 'src/constants/routes';
import {
  HomeSVG,
  LocationSVG,
  CartSVG,
  FavouriteSVG,
  NotificationSVG,
} from 'src/assets/images/icons';
import colors from 'src/constants/colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <HomeSVG
                width={26}
                height={26}
                color={colors.GRAY}
                fill={focused ? colors.PRIMARY : colors.GRAY}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.LOCATION}
        component={Location}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <LocationSVG
                width={26}
                height={26}
                fill={focused ? colors.PRIMARY : colors.GRAY}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.CART}
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <CartSVG
                width={26}
                height={26}
                fill={focused ? colors.PRIMARY : colors.GRAY}
              />
            );
          },
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: '#FFC529',
            color: colors.ACCENT,
            marginLeft: 10,
            borderRadius: 5,
          },
        }}
      />
      <Tab.Screen
        name={routes.FAVOURITES}
        component={Favourites}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FavouriteSVG
                width={26}
                height={26}
                fill={focused ? colors.PRIMARY : colors.GRAY}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <NotificationSVG
                width={26}
                height={26}
                fill={focused ? colors.PRIMARY : colors.GRAY}
              />
            );
          },
          tabBarBadge: 6,
          tabBarBadgeStyle: {
            backgroundColor: '#FFC529',
            color: colors.ACCENT,
            marginLeft: 10,
            borderRadius: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
