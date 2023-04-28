import React from 'react';
import Background from '../basic_components/Background';
import Logo from '../basic_components/Logo';
import Header from '../basic_components/Header';
import Button from '../basic_components/Button';

export default function DashScreen({navigation}) {
  var content = (
    <Background>
      <Logo />
      <Header> Welcome</Header>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'StartScreen',
              },
            ],
          })
        }>
        Logout
      </Button>
    </Background>
  );

  return content;
}
