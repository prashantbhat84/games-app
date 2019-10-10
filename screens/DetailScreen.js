import React, { Fragment, useState } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Col
} from 'react-native-table-component';

const DetailScreen = props => {
  const data = props.navigation.getParam('gameName');
  const [tableHead, setTableHead] = useState([
    '',
    'Status',
    'Score',
    'Head3',
    'Head4'
  ]);
  const [tableTitle, setTableTitle] = useState([
    'Game1',
    'Game2',
    'Game3',
    'Game4'
  ]);
  const [tableData, setTableData] = useState([
    ['1', '2', '3', 'a'],
    ['a', 'b', 'c', 'b'],
    ['1', '2', '3', 'c'],
    ['a', 'b', 'c', 'd']
  ]);

  return (
    <Fragment>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '900' }}>Table For Game:</Text>
        <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 20 }}>
          {data}
        </Text>
      </View>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={tableHead}
            flexArr={[1, 1, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={tableData}
              flexArr={[1, 1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    </Fragment>
  );
};
DetailScreen.navigationOptions = {
  headerTitle: 'Game Status'
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
});

export default DetailScreen;
