import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {InputText} from '../../../components/inputText';
import {Button} from '../../../components/button';
import {Validations} from '../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  //All states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setIsSecure] = useState(false);
  //error states
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const isValid = () => {
    let validate = true;

    setErrorEmail('');
    setErrorPassword('');

    if (!Validations.isValidEmail(email)) {
      validate = false;
      setErrorEmail('*please enter the valid email!');
    } else if (!Validations.isValidPassword(password)) {
      validate = false;
      setErrorPassword(
        '*Password must have 8 characters with 1 speacial character 1 capital 1 smallcase and 1 number!',
      );
    }
    return validate;
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
              <Text style={styles.textTitle}>Hello! WELCOME BACK</Text>
            </View>
            <View style={styles.viewMid}>
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
                secure={secure}
                error={errorPassword}
                onPress={() => {
                  setIsSecure(!secure);
                }}
              />
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  marginTop: Theme.responsiveSize.size10,
                }}>
                <Text style={styles.subText}>Forgot Password</Text>
              </TouchableOpacity>
              <Button
                viewStyle={styles.viewMV10}
                title={'Log in'}
                onPress={() => {
                  // if (isValid()) {
                    props.navigation.navigate('HomeScreen');
                  // }
                }}
              />
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  props.navigation.navigate('RegisterScreen');
                }}>
                <Text style={styles.subText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};
export default LoginScreen;
