import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image} from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Home',{name, email});
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.jobizz}>Jobizz</Text>
        <Image source={require('./assets/Headline.png')} style={styles.Headline}/>
        <Text style={styles.log}>Let's log in. Apply to jobs!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.contain}>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.horizontalLine}></View>
    </View>
      <View style={styles.companies}>
        <Image source={require('./assets/Group 54.png')} />
        <Image source={require('./assets/Group 55.png')} />
        <Image source={require('./assets/Group 56.png')} />
      </View>
      <Text style={styles.account}>Haven't an account?<Text style={styles.register}> Register</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 60,
    borderColor: '#0D0D26',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10
  },
  button: {
    height: 60,
    backgroundColor: '#356899',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
  },
  companies: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 50
  },
  jobizz : {
    paddingBottom: 5,
    fontSize: 20,
    color: '#356899'
  },
  log: {
    paddingBottom: 40
  },
  Headline: {
    paddingBottom: 20
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#AFB0B6', // Change this to the color you want
    width: '25%',
  },
  contain: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-between'
  },
  account:{
  paddingLeft: 100,
  },
  register: {
    color: '#356899'
  }
});
