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

const RegistrasiScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');

  const handleRegister = () => {
    fetch('http://20.205.61.111/api/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone_number: phone,
      }),
    })
      .then(json => json.json())
      .then(res => {
        if (res.status) {
          navigation.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          });
        } else {
          alert('login gagal');
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
        style={{marginTop: 40, marginBottom: 30, alignSelf: 'center'}}
      />
      <TextInputTemplate
        placeholder="Nama Lengkap"
        value={name}
        setValue={setname}
      />
      <TextInputTemplate
        placeholder="Nomor Telepon"
        value={phone}
        setValue={setphone}
      />
      <TextInputTemplate
        placeholder="Email"
        value={email}
        setValue={setemail}
      />
      <TextInputTemplate
        placeholder="Password"
        value={password}
        setValue={setpassword}
      />
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          handleRegister();
        }}>
        <Text style={styles.Button.ButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegistrasiScreen;

const styles = StyleSheet.create({
  backgroud: {
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
