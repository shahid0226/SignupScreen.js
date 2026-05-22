import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function SignupScreen() {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign Up" />
    </View>
  );
}
