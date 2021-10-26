import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';

export default class SignUp extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      mobile: '',
      gender:'',
      password: '',
      confirmPassword: '',
    };
  }

  handleRegisterBtnClick = () => {
    this.validate({
      name: { minlength: 3, maxlength: 25, required: true },
      address: { required: true },
      mobile: { required: true },
      gender:{ required:true },
      password: { required: true },
      confirmPassword: { equalPassword: this.state.password, required: true },
    });
  };

  handleSignInBtnClick() {
    console.log('sign in clicked');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your address"
            value={this.state.address}
            onChangeText={(address) => this.setState({ address })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your mobile number"
            value={this.state.mobile}
            onChangeText={(mobile) => this.setState({ mobile })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Gender</Text>
          <Picker
                style={styles.inputField}
                selectedValue={this.state.gender}
                onValueChange={(gender, itemIndex) => this.setState({ gender })}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
           </Picker>

           <View style={styles.divider}></View>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Enter password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
        </View>

        <Button title="Register" onPress={this.handleRegisterBtnClick} />

        <Text style={styles.log}>{this.getErrorMessages()}</Text>

        <View style={styles.container}>
          <View style={styles.line}></View>
          <Text stylele={styles.text}>OR</Text>
          <View style={styles.line}></View>
        </View>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
  },

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 8,
  },

  log: {
    textAlign: 'center',
    marginVertical: 2,
    color: 'red',
  },

  signin: {
    marginVertical: 40,
  },
  line:{
    height:1,
    width:'45%',
    backgroundColor:'#E3E3E3',
  },
  text:{
    fontWeight:'bold',
  }
});