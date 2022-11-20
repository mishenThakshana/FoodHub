import {FC, useState} from 'react';
import {View, TextInput} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';

interface ClassicInputInterface {
  autofocus?: boolean;
  type?: string;
  border?: string;
  handler?: any;
}

const ClassicInput: FC<ClassicInputInterface> = ({
  autofocus,
  type,
  border,
  handler,
}) => {
  const [focused, setIsFocused] = useState(false);

  return (
    <View style={styles.formInputContainer}>
      <TextInput
        onChangeText={handler}
        autoCorrect={false}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        autoFocus={autofocus && true}
        cursorColor={colors.PRIMARY}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.formInput,
          focused && {borderColor: colors.PRIMARY},
          border ? {borderColor: border} : {},
        ]}
      />
    </View>
  );
};

export default ClassicInput;
