import {createDrawerNavigator} from '@react-navigation/drawer';
import routes from 'src/constants/routes';
import {MyOrders, MyProfile} from 'src/screens/main/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.MY_ORDERS} component={MyOrders} />
      <Drawer.Screen name={routes.MY_PROFILE} component={MyProfile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
