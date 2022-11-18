import {FC} from 'react';
import {View, Text} from 'react-native';
import colors from 'src/constants/colors';

interface LineTextInterface {
  width: number;
  text: string;
  textColor: string;
}

const LineText: FC<LineTextInterface> = ({width, text, textColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: textColor,
          opacity: 0.5,
        }}
      />
      <View>
        <Text
          style={{
            width,
            textAlign: 'center',
            color: textColor,
            fontFamily: 'SofiaProBold',
            fontSize: 16,
          }}>
          {text}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: textColor,
          opacity: 0.5,
        }}
      />
    </View>
  );
};

export default LineText;
