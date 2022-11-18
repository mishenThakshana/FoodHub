import {FC} from 'react';
import {View, Text} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface AlreadyTextInterface {
  text: string;
  subText: string;
  underline?: boolean;
  subTextColor: string;
  textColor: string;
}

const AlreadyText: FC<AlreadyTextInterface> = ({
  text,
  subText,
  underline,
  textColor,
  subTextColor,
}) => {
  return (
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
  );
};

export default AlreadyText;
