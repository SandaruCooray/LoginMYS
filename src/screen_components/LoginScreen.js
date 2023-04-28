import React, {useState} from 'react';

import Background from '../basic_components/Background';
import Logo from '../basic_components/Logo';
import Header from '../basic_components/Header';
import Button from '../basic_components/Button';
import TextInput from '../basic_components/TextInput';
import BackButton from '../basic_components/BackButton';
import Paragraph from '../basic_components/Paragraph';

import {passwordValidator} from '../helpers/passwordValidator';
import {emailValidator} from '../helpers/emailValidator';

import {TextInput as TextInput2} from 'react-native-paper';

import hide from '../assets/hide.png';
import view from '../assets/view.png';

export default function LoginScreen({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [email, setEmail] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({
        ...email,
        error: emailError,
      });
      setPassword({
        ...password,
        error: passwordError,
      });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DashScreen',
        },
      ],
    });
  };

  var content = (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header> Simple Login App </Header>
      <Paragraph>
        Task 1. LoginScreen component uses multiple custom componenets like Logo
        , Header , Paragraph , TextInput etc.
      </Paragraph>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text =>
          setEmail({
            value: text,
            error: '',
          })
        }
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={text =>
          setPassword({
            value: text,
            error: '',
          })
        }
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput2.Icon
            icon={secureTextEntry ? hide : view}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              return false;
            }}
          />
        }
      />

      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  );

  return content;
}
