import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Game from '../models/games';
import Scan from '../components/ImagePicker';

const GameStartScreen = props => {
  const gameNo = props.navigation.getParam('GameNo');
  const status = props.navigation.getParam('status');
  return (
    <Fragment>
      <Scan />
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
