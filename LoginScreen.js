import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" />
    </View>
  );
}
