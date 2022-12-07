import {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {ScreenTitle, SingleTopbar} from 'src/components';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SearchFilter} from 'src/assets/images/icons';
import colors from 'src/constants/colors';

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
      {/* Search with filter */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* Input */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#E2DFD2',
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          <View>
            <Ionicon name="ios-search-outline" color="#767F9D" size={16} />
          </View>
          <View>
            <TextInput
              style={{
                fontFamily: 'SofiaProMedium',
                color: '#9AA0B4',
                fontSize: 14,
                marginLeft: 5,
              }}
              placeholder="Find for food or restaurant..."
              placeholderTextColor="#9AA0B4"
              cursorColor={colors.PRIMARY}
            />
          </View>
        </View>
        {/* Filter */}
        <View style={{marginHorizontal: 20}}>
          <SearchFilter />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
