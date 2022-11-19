import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface AlreadyTextInterface {
  text?: string;
  subText?: string;
  underline?: boolean;
  subTextColor: string;
  textColor: string;
  handler?: () => void;
}

const AlreadyText: FC<AlreadyTextInterface> = ({
  text,
  subText,
  underline,
  textColor,
  subTextColor,
  handler,
}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text style={[styles.alreadyText, {color: textColor}]}>
          {text}
          {` `}
          <Text
            style={[
              underline && {textDecorationLine: 'underline'},
              {color: subTextColor},
            ]}>
            {subText}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AlreadyText;
