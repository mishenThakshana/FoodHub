import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from 'src/constants/colors';

interface BtnIconInterface {
  size: number;
  icon?: any;
  image?: any;
  label: string;
  color: string;
  labelColor?: string;
  handler?: () => void;
}

const BtnIcon: FC<BtnIconInterface> = ({
  size,
  icon,
  image,
  label,
  color,
  labelColor,
  handler,
}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: 28,
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: size,
        }}>
        <View style={{marginRight: 5}}>{image && image}</View>
        <View>
          <Text
            style={{
              color: labelColor ? labelColor : colors.SECONDARY,
              fontSize: 13,
              fontFamily: 'SofiaProMedium',
            }}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BtnIcon;
