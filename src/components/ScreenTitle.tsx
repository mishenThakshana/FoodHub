import {FC} from 'react';
import {View, Text} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface ScreenTitleInterface {
  title: string;
  size?: number;
  color?: string;
  style?: object;
}

const ScreenTitle: FC<ScreenTitleInterface> = ({title, size, color, style}) => {
  return (
    <Text
      style={[
        styles.screenTitle,
        color ? {color} : {color: colors.SECONDARY},
        size ? {fontSize: size} : {},
        style && style,
      ]}>
      {title}
    </Text>
  );
};

export default ScreenTitle;
