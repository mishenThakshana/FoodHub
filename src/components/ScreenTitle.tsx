import {FC} from 'react';
import {View, Text} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface ScreenTitleInterface {
  title: string;
  size?: number;
}

const ScreenTitle: FC<ScreenTitleInterface> = ({title, size}) => {
  return (
    <Text
      style={[
        styles.screenTitle,
        {color: colors.SECONDARY},
        size ? {fontSize: size} : {},
      ]}>
      {title}
    </Text>
  );
};

export default ScreenTitle;
