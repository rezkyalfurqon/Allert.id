import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LogoIcon from '../assets/logoicon.svg';
import TextInputTemplate from '../components/TextInputTemplate';
import TextInputTemplate2 from '../components/TextInputTemplate2';
import {getData, storeData} from '../utils';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleLogin = () => {
    fetch('http://20.205.61.111/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(json => json.json())
      .then(res => {
        if (res.status) {
          storeData('token', {value: res.Token}).finally(() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'TabBottom'}],
            });
          });
        } else {
          alert('Email dan Password yang Anda Masukan Salah');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <ScrollView style={styles.backgroud}>
      <LogoIcon
        width={181}
        height={55}
        style={{marginTop: 140, marginBottom: 30, alignSelf: 'center'}}
      />
      <TextInputTemplate
        placeholder="Email"
        value={email}
        setValue={setemail}
      />
      <TextInputTemplate2
        placeholder="Password"
        value={password}
        setValue={setpassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          handleLogin();
        }}>
        <Text style={styles.Button.ButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          textAlign: 'center',
          marginTop: 15,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#000000',
          }}>
          Not a member?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegistrasiScreen');
          }}>
          <Text style={{fontSize: 14, color: '#FFFFFF'}}> Sign Up now.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroud: {
    // alignItems: 'center',
    backgroundColor: '#273B69',
    flex: 1,
  },
  Button: {
    ButtonStyle: {
      width: 194,
      backgroundColor: '#C5FEED',
      borderRadius: 20,
      paddingVertical: 10,
      marginTop: 30,
      alignSelf: 'center',
    },
    ButtonText: {
      color: '#111111',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
