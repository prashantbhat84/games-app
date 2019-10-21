import React, { Component } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';

import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
class Scan extends Component {
  constructor(props) {
    super(props);

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.scannedCode = null;

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await this.setState({ hasCameraPermission: status === 'granted' });
    await this.resetScanner();
  }

  renderAlert(title, message) {
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => this.resetScanner() }],
      { cancelable: true }
    );
  }

  onBarCodeRead({ type, data }) {
    if (
      (type === this.state.scannedItem.type &&
        data === this.state.scannedItem.data) ||
      data === null
    ) {
      return;
    }

    //Vibration.vibrate();
    this.setState({ scannedItem: { data, type } });
    console.log(`QRCode scanned: ${data}`);
    console.log(type);
  }

  renderMessage() {
    if (this.state.scannedItem && this.state.scannedItem.type) {
      const { type, data } = this.state.scannedItem;

      return (
        <Text style={styles.scanScreenMessage}>{`Scanned  \n ${data}`}</Text>
      );
    }
    return (
      <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>
    );
  }

  resetScanner() {
    this.scannedCode = null;
    this.setState({
      scannedItem: {
        type: null,
        data: null
      }
    });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={this.onBarCodeRead}
            style={StyleSheet.absoluteFill}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
          {this.renderMessage()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
});
export default Scan;
