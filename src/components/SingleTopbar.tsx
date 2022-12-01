import {FC} from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {OptionsImg} from 'src/assets/images/icons';
import colors from 'src/constants/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {ProfileImg} from 'src/assets/images';

interface SingleTopbarInterface {
  address: string;
}

const SingleTopbar: FC<SingleTopbarInterface> = ({address}) => {
  return (
    <View style={styles.topbarContainer}>
      {/* Icon Btn */}
      <View>
        <Pressable>
          <View style={styles.optionsContainer}>
            <Image source={OptionsImg} style={{width: 15, height: 10}} />
          </View>
        </Pressable>
      </View>
      {/* Address */}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.addressDeliverTo}>Deliver to</Text>
          <Ionicon name="ios-chevron-down" color="#8C9099" size={16} />
        </View>
        <View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
      <View>
        <Image
          source={ProfileImg}
          style={{width: 50, height: 50, borderRadius: 12}}
        />
      </View>
    </View>
  );
};

export default SingleTopbar;

export const styles = StyleSheet.create({
  topbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    backgroundColor: colors.ACCENT,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
  addressDeliverTo: {
    color: '#8C9099',
    fontFamily: 'SofiaProMedium',
    fontSize: 14,
    lineHeight: 17.12,
  },
  address: {
    fontFamily: 'SofiaProMedium',
    fontSize: 15,
    color: colors.PRIMARY,
    lineHeight: 18.35,
  },
});
