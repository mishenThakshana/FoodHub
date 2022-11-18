import {View, Text, Image, useWindowDimensions} from 'react-native';
import {TopImage} from 'src/assets/images';
import styles from 'src/styles/Global.styles';

const TopbarImage = () => {
  const {width} = useWindowDimensions();
  return (
    <Image
      style={[styles.topBarImage, {width}]}
      source={TopImage}
      resizeMode="contain"
    />
  );
};

export default TopbarImage;
