import React, { Fragment } from 'react';
import { Text } from 'react-native';

const PaymentScreen = props => {
  const price = props.navigation.getParam('Price');
  const GameName = props.navigation.getParam('GameName');
  return (
    <Fragment>
      <Text>This is a payment Screen</Text>
      <Text>The payment is for {GameName}</Text>
      <Text>Price is Rs:{price}</Text>
    </Fragment>
  );
};
PaymentScreen.navigationOptions = {
  headerTitle: 'Payment'
};

export default PaymentScreen;
