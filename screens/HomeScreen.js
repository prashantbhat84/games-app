import React, { Fragment, useEffect } from 'react';
import { Button, Text, StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as GameListActions from '../store/action/gameslist';
const HomeScreen = props => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.Games.loadedGames);
  const userid = useSelector(state => state.Auth.userID);
  useEffect(() => {
    dispatch(GameListActions.fetchgames());
  }, [dispatch]);

  const renderListItem = itemData => {
    return (
      <Fragment>
        {itemData.item.purchase === true ? (
          <View style={styles.listItems}>
            <View
              style={{
                fontWeight: 'bold',
                height: 50,
                marginLeft: 100,
                fontSize: 20
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -30 }}
              >
                {itemData.item.gameid}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 100 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Price:</Text>
              <Text style={{ fontSize: 15 }}>{itemData.item.price}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.buttonStyle1}>
                <Button
                  title='Enter'
                  onPress={() => {
                    props.navigation.navigate({
                      routeName: 'Detail',
                      params: {
                        gameName: itemData.item.title,
                        userid: userid
                      }
                    });
                  }}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.listItems}>
            <View
              style={{
                fontWeight: 'bold',
                height: 50,
                marginLeft: 100,
                fontSize: 20
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -30 }}
              >
                {itemData.item.gameid}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 100 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Price:</Text>
              <Text style={{ fontSize: 15 }}>{itemData.item.price}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 110, marginTop: 20 }}>
                <Button
                  title='Buy'
                  onPress={() => {
                    props.navigation.navigate({
                      routeName: 'Payment',
                      params: {
                        Price: itemData.item.price,
                        GameName: itemData.item.title,
                        userid: userid
                      }
                    });
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </Fragment>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={games}
        renderItem={renderListItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};
HomeScreen.navigationOptions = {
  headerTitle: 'Game List'
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900'
  },
  listItems: {
    padding: 10,
    width: 300,
    height: 150,
    marginBottom: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonStyle: {
    marginLeft: 30,
    marginTop: 20,
    width: 70,
    flexDirection: 'row',
    paddingRight: 10
  },
  buttonStyle1: {
    width: 70,
    marginRight: 50,
    marginLeft: 100,
    marginTop: 15
  }
});

export default HomeScreen;
