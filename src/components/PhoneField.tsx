import {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from 'src/styles/Global.styles';
import colors from 'src/constants/colors';
import axios from 'axios';
import ClassicInput from './ClassicInput';

const PhoneField = () => {
  const [countries, setCountries] = useState<any>([]);
  const [filteredCountries, setFilteredCountries] = useState<any>([]);
  const [openCountryPicker, setOpenCountryPicker] = useState<boolean>(false);
  const [country, setCountry] = useState<any>({
    code: 'LK',
    dialCode: '+94',
    flag: 'https://flagcdn.com/w320/lk.png',
    name: 'Sri Lanka',
  });

  useEffect(() => {
    let arr: any = [];
    axios.get<any>('https://restcountries.com/v3.1/all').then(res => {
      res.data.map((element: any) => {
        let obj = {};
        Object.assign(obj, {code: element.cca2});
        Object.assign(obj, {
          dialCode: element.idd.suffixes
            ? typeof element.idd.suffixes === 'object'
              ? `${element.idd.root}${element.idd.suffixes[0]}`
              : `${element.idd.root}${element.idd.suffixes}`
            : `${element.idd.root}`,
        });
        Object.assign(obj, {flag: element.flags['png']});
        Object.assign(obj, {name: element.name.official});
        arr.push(obj);
      });
      setCountries(arr);
      setFilteredCountries(arr);
    });
  }, []);

  const filterCountry = (keyword: string) => {
    setFilteredCountries([]);
    keyword === '' && setFilteredCountries(countries);
    setFilteredCountries(
      countries.filter((country: any) =>
        country.name.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  };

  return (
    <>
      <View style={styles.phoneRegistrationInpContainer}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: country.flag}}
                resizeMode="center"
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text
                style={
                  localStyles.selectedCountryDialCode
                }>{`(${country.dialCode})`}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setOpenCountryPicker(!openCountryPicker)}>
                <MaterialIcon
                  name="arrow-drop-down"
                  size={25}
                  color={colors.GRAY}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            cursorColor={colors.PRIMARY}
            style={{color: colors.SECONDARY, fontSize: 18}}
          />
        </View>
      </View>
      {openCountryPicker && (
        <View style={localStyles.countryModalContainer}>
          {countries.length > 240 && (
            <FlatList
              data={filteredCountries}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCountry(item);
                      setOpenCountryPicker(false);
                    }}>
                    <View style={localStyles.countryCard}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={{width: 60, height: 60}}
                          source={{uri: item.flag}}
                          resizeMode="center"
                        />
                        <Text style={localStyles.countryCardAreaCode}>
                          {item.code}
                        </Text>
                      </View>
                      <View>
                        <Text style={localStyles.countryCardDialCode}>
                          {item.dialCode}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              ListHeaderComponent={
                <View>
                  <ClassicInput
                    handler={(keyword: string) => filterCountry(keyword)}
                    border={colors.PRIMARY}
                  />
                </View>
              }
              keyExtractor={item => item.code}
            />
          )}
        </View>
      )}
    </>
  );
};

export const localStyles = StyleSheet.create({
  countryModalContainer: {
    position: 'absolute',
    backgroundColor: colors.LIGHT_GRAY,
    maxHeight: 300,
    width: 250,
    top: 165,
    elevation: 10,
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    opacity: 0.9,
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  countryCardAreaCode: {
    marginLeft: 40,
    fontSize: 18,
    color: colors.SECONDARY,
    fontFamily: 'SofiaProMedium',
  },
  countryCardDialCode: {
    fontSize: 18,
    color: colors.SECONDARY,
    fontFamily: 'SofiaProMedium',
  },
  selectedCountryDialCode: {
    color: colors.SECONDARY,
    fontFamily: 'SofiaProBold',
    fontSize: 18,
  },
});

export default PhoneField;
