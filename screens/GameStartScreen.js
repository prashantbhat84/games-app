import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Game from '../models/games';
import Scan from './ImagePicker';

const GameStartScreen = props => {
  const gameNo = props.navigation.getParam('GameNo');
  const status = props.navigation.getParam('status');
  return (
    <Fragment>
      {status === 'Completed' || status === 'InProgress' ? (
        <View style={{ marginTop: 250 }}>
          <View style={{ fontSize: 20, fontWeight: '900' }}>
            <Text>This game is {status}. Please choose a new game</Text>
          </View>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <View style={{ width: 100, marginLeft: 50, marginTop: 50 }}>
              <Button
                title='Go Back'
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </View>
            <View style={{ width: 100, marginLeft: 50, marginTop: 50 }}>
              <Button
                title='Go Home'
                onPress={() => {
                  props.navigation.popToTop();
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        props.navigation.navigate({
          routeName: 'BarCodeScanner',
          params: {
            gameno: gameNo
          }
        })
      )}
    </Fragment>
  );
};
GameStartScreen.navigationOptions = {
  headerTitle: 'Start Game'
};
const styles = StyleSheet.create({
  completed: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default GameStartScreen;
