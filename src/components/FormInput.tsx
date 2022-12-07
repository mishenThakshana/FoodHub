import {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import colors from 'src/constants/colors';
import styles from 'src/styles/Global.styles';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface FormInputInterface {
  placeholder: string;
  autofocus?: boolean;
  type?: string;
  handler?: (val: string) => void;
  value?: string;
}

const FormInput: FC<FormInputInterface> = ({
  placeholder,
  autofocus,
  type,
  handler,
  value,
}) => {
  const [focused, setIsFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.formInputPlaceholder}>{placeholder}</Text>

      {type !== 'password' ? (
        <TextInput
          onChangeText={handler}
          autoCorrect={false}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          autoFocus={autofocus && true}
          cursorColor={colors.PRIMARY}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.formInput, focused && {borderColor: colors.PRIMARY}]}
          value={value}
        />
      ) : (
        <View
          style={[
            styles.passwordInputContainer,
            passwordFocused && {borderColor: colors.PRIMARY},
          ]}>
          <TextInput
            onChangeText={handler}
            style={{flex: 1, color: colors.SECONDARY}}
            autoCorrect={false}
            secureTextEntry={!passwordVisible}
            cursorColor={colors.PRIMARY}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            value={value}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicon
              name={passwordVisible ? 'ios-eye-off' : 'ios-eye'}
              color="#D0D2D1"
              size={18}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FormInput;
