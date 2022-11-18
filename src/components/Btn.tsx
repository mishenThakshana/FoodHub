import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface BtnInterface {
  label?: string;
  icon?: string;
  handler?: () => void;
  color?: string;
  size?: string;
  labelColor: string;
  labelSize?: number;
  borderColor?: string;
  transparent?: boolean;
}

const Btn: FC<BtnInterface> = ({
  label,
  icon,
  handler,
  color,
  size,
  labelColor,
  labelSize,
  borderColor,
}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={[
          color ? {backgroundColor: color} : {backgroundColor: colors.PRIMARY},
          size === 'sm' ? styles.btnSmallContainer : styles.btnContainer,
          borderColor ? {borderWidth: 1, borderColor} : {},
        ]}>
        <Text
          style={[
            {fontFamily: 'SofiaProMedium'},
            {color: labelColor},
            labelSize ? {fontSize: labelSize} : {fontSize: 14},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;
