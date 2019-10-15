import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import Game from '../models/games';

const GameStartScreen = props => {
  const gameNo = props.navigation.getParam('GameNo');
  const status = props.navigation.getParam('status');
  return (
    <Fragment>
      {status === 'completed' || status === 'In-progress' ? (
        <View>
          <Text>This Game is in {status} mode. Please Try again Later</Text>
        </View>
      ) : (
        <View>
          <Text>This is the start Game Screen</Text>
          <Text> Game no:{gameNo}</Text> {/* scan code to be here*/}
        </View>
      )}
    </Fragment>
  );
};
GameStartScreen.navigationOptions = {
  headerTitle: 'Start Game'
};

export default GameStartScreen;
