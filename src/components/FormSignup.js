import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput //tampilan First Name input box
          style={styles.inputBox} //view text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="First Name" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff"
          keyboardType="default" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput //tampilan Last Name input box
          style={styles.inputBox} //view text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Last Name" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff"
          keyboardType="default" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput //tampilan email input box
          style={styles.inputBox} //view text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff"
          keyboardType="email-address" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput //tampilan password input box
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password" //tampilan default teks dalam password input box
          secureTextEntry={true}
          placeholderTextColor="#000000"
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    //setting tampilan input box yang dipakai
    width: 300, //lebar
    backgroundColor: '#ffffff', //background box
    borderRadius: 10, //lengkungan sudut box
    paddingHorizontal: 16, //jarak dari tepi box ke teks
    fontSize: 16, //ukuran teks
    color: '#000000', //warna teks
    marginVertical: 10, //jarak antar
  },
  button: {
    //setting tampilan button yang dipakai
    width: 250, //lebar button
    backgroundColor: '#1c313a', //warna background button
    borderRadius: 25, //lengkungan sudut button
    marginVertical: 10, //jarak antara button dengan box lain (mis: input box)
    paddingVertical: 13, //jarak antara teks dengan tepi button
  },
  buttonText: {
    //setting tampilan text yang bisa diklik (pada bawah layar)
    fontSize: 16, //ukuran teks button
    fontWeight: '500', //ketebalan teks button
    color: '#ffffff', //warna teks button
    textAlign: 'center', //menengahkan format tulisan
  },
});
