import {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from 'src/styles/Global.styles';
import colors from 'src/constants/colors';

const VerificationCode = () => {
  // values
  const [code1, setCode1] = useState<any>(null);
  const [code2, setCode2] = useState<any>(null);
  const [code3, setCode3] = useState<any>(null);
  const [code4, setCode4] = useState<any>(null);

  // refs
  const code1Ref = useRef<any>(null);
  const code2Ref = useRef<any>(null);
  const code3Ref = useRef<any>(null);
  const code4Ref = useRef<any>(null);

  // focus state
  const [code1Focus, setCode1Focus] = useState(false);
  const [code2Focus, setCode2Focus] = useState(false);
  const [code3Focus, setCode3Focus] = useState(false);
  const [code4Focus, setCode4Focus] = useState(false);

  return (
    <View style={styles.verificationCodeContainer}>
      <View
        style={[
          styles.verificationInputContainer,
          code1Focus ? {borderColor: colors.PRIMARY} : {},
        ]}>
        <TextInput
          ref={code1Ref}
          onChange={val => {
            setCode1(val);
            if (code1 !== '') {
              code2Ref.current.focus();
            }
          }}
          onFocus={() => setCode1Focus(true)}
          onBlur={() => setCode1Focus(false)}
          maxLength={1}
          style={styles.verificationInput}
          cursorColor={colors.PRIMARY}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={[
          styles.verificationInputContainer,
          code2Focus ? {borderColor: colors.PRIMARY} : {},
        ]}>
        <TextInput
          ref={code2Ref}
          onChange={val => {
            setCode2(val);
            if (code2 !== '') {
              code3Ref.current.focus();
            }
          }}
          onFocus={() => setCode2Focus(true)}
          onBlur={() => setCode2Focus(false)}
          maxLength={1}
          style={styles.verificationInput}
          cursorColor={colors.PRIMARY}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={[
          styles.verificationInputContainer,
          code3Focus ? {borderColor: colors.PRIMARY} : {},
        ]}>
        <TextInput
          ref={code3Ref}
          onChange={val => {
            setCode3(val);
            if (code3 !== '') {
              code4Ref.current.focus();
            }
          }}
          onFocus={() => setCode3Focus(true)}
          onBlur={() => setCode3Focus(false)}
          maxLength={1}
          style={styles.verificationInput}
          cursorColor={colors.PRIMARY}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={[
          styles.verificationInputContainer,
          code4Focus ? {borderColor: colors.PRIMARY} : {},
        ]}>
        <TextInput
          ref={code4Ref}
          onChange={val => {
            setCode4(val);
            if (code4 !== '') {
              code4Ref.current.focus();
            }
          }}
          onFocus={() => setCode4Focus(true)}
          onBlur={() => setCode4Focus(false)}
          maxLength={1}
          style={styles.verificationInput}
          cursorColor={colors.PRIMARY}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default VerificationCode;
