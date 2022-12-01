import {SafeAreaView, View} from 'react-native';
import {ScreenTitle, SingleTopbar} from 'src/components';

const Home = () => {
  return (
    <SafeAreaView style={{marginVertical: 10, marginHorizontal: 20}}>
      {/* Topbar */}
      <SingleTopbar address="4102 Pretty View Lane " />
      {/* Title */}
      <ScreenTitle
        title={`What would you like ${'\n'}to order`}
        size={30}
        color="#323643"
        style={{marginVertical: 20}}
      />
    </SafeAreaView>
  );
};

export default Home;
