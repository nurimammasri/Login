import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
//import file Routes.js agar aplikasi bisa berpindah halaman tampilan (Routes.js sebagai navigator)
import Routes from './src/Routes';
export default class App extends Component {
  //tampilan default aplikasi
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a" //warna latar aplikasi
          barStyle="light-content" //tema status bar diatas aplikasi berwarna terang
        />
        <Routes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // StyleSheet abstraksi serupa CSS StyleSheets
  container: {
    flex: 1,
  },
});
