import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameProgress(props) {
  const code = props.navigation.getParam('QRCode');

  return (
    <View>
      <Text> QR code is {code}</Text>
      <Button title='GO To Home' onPress={() => props.navigation.popToTop()} />
    </View>
  );
}
