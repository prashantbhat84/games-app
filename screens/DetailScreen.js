import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['GameID', 'Status', 'Score', 'StartGame'],
      tableData: [
        ['1', 'completed', '3', '4'],
        ['2', 'In-progress', '0', 'd'],
        ['3', 'completed', '200', '4'],
        ['4', 'pending', '0', 'd']
      ],
      totalScore: 203
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate({
            routeName: 'StartGame',
            params: {
              GameNo: index + 1,
              status: 'pending'
            }
          })
        }
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Start Game</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
        <View style={{ flexDirection: 'row', marginLeft: 100 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total Score:</Text>
          <Text style={{ fontSize: 15 }}>{this.state.totalScore}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
DetailScreen.navigationOptions = {
  headerTitle: 'Details'
};
