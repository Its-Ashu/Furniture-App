import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {InputText} from '../../../components/inputText';
import {Button} from '../../../components/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Validations} from '../../../constants';

const RegisterScreen = props => {
  //All states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setIsSecurePassword] = useState(false);
  const [secureConfirmPassword, setIsSecureConfirmPassword] = useState(false);
  //error states
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const isValid = () => {
    let validate = true;

    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');

    if (name.trim().length === 0) {
      validate = false;
      setErrorName('*please enter your name!');
    } else if (!Validations.isValidEmail(email)) {
      validate = false;
      setErrorEmail('*please enter the valid email!');
    } else if (!Validations.isValidPassword(password)) {
      validate = false;
      setErrorPassword(
        '*Password must have 8 characters with 1 speacial character 1 capital 1 smallcase and 1 number!',
      );
    } else if (confirmPassword !== password) {
      validate = false;
      setErrorConfirmPassword('*Your password has been not match!');
    }
  };
  return (
    <>
      <SafeAreaView style={styles.viewMainContainer}>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.scrollView}>
          <View style={styles.viewMain}>
            <View style={styles.viewTop}>
              <View style={styles.viewRow}>
                <View style={styles.viewLine} />
                <Image style={styles.appImage} source={Theme.icons.AppIcon} />
                <View style={styles.viewLine} />
              </View>
              <Text style={styles.textTitle}>WELCOME</Text>
            </View>
            <View style={styles.viewMid}>
              <InputText
                value={name}
                textTitle={'Name'}
                onChangeText={setName}
                placeholder={'Enter your name'}
                error={errorName}
                onPress={() => {}}
              />
              <InputText
                isEmail={true}
                value={email}
                textTitle={'Email'}
                onChangeText={setEmail}
                placeholder={'Enter your email'}
                error={errorEmail}
                onPress={() => {}}
              />
              <InputText
                value={password}
                textTitle={'Password'}
                onChangeText={setPassword}
                placeholder={'Enter your password'}
                isPassword={true}
                secure={securePassword}
                error={errorPassword}
                onPress={() => {
                  setIsSecurePassword(!securePassword);
                }}
              />
              <InputText
                value={confirmPassword}
                textTitle={'Confirm Password'}
                onChangeText={setConfirmPassword}
                placeholder={'Enter confirm password'}
                isPassword={true}
                secure={secureConfirmPassword}
                error={errorConfirmPassword}
                onPress={() => {
                  setIsSecureConfirmPassword(!secureConfirmPassword);
                }}
              />
              <Button
                viewStyle={styles.viewMV10}
                title={'Sign up'}
                onPress={() => {
                  if (isValid()) {
                    props.navigation.navigate('HomeScreen');
                  }
                }}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.subText}>
                  Already have account?
                  <Text
                    style={{fontFamily: Theme.fonts.PoppinsSemibold, color:Theme.colors.textColor5}}
                    onPress={() => {
                      props.navigation.navigate('LoginScreen');
                    }}>
                    {' '}
                    Sign in
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};
export default RegisterScreen;
