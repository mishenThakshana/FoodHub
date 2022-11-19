import {FC} from 'react';
import {Text} from 'react-native';
import styles from 'src/styles/Global.styles';

interface MessageInterface {
  message: string;
}

const Message: FC<MessageInterface> = ({message}) => {
  return <Text style={styles.message}>{message}</Text>;
};

export default Message;
