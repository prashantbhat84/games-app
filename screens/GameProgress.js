import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameProgress(props) {
  return (
    <View>
      <Text> Game in Progress</Text>
      <Button
        title='GO Home'
        onPress={() => props.navigation.replace('Home')}
      />
    </View>
  );
}
