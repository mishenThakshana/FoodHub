import {FC} from 'react';
import {View, Text} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface ScreenTitleInterface {
  title: string;
}

const ScreenTitle: FC<ScreenTitleInterface> = ({title}) => {
  return (
    <Text style={[styles.screenTitle, {color: colors.SECONDARY}]}>{title}</Text>
  );
};

export default ScreenTitle;
