import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BGProfile from '../assets/profilbg.svg';
import Logout from '../assets/logout.svg';
import Close from '../assets/close.svg';
import Email from '../assets/email.svg';
import Profile from '../assets/profileIcon.svg';
import {getData, removeData} from '../utils';

const ProfilScreen = ({navigation}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  useEffect(() => {
    getData('token').then(token => {
      fetch('http://20.205.61.111/api/profile', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.value,
        },
      })
        .then(json => json.json())
        .then(res => {
          setname(res.data.name);
          setemail(res.data.email);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }, []);

  const handleLogout = () => {
    getData('token').then(token => {
      fetch('http://20.205.61.111/api/logout', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.value,
        },
      })
        .then(json => json.json())
        .then(res => {
          if (res.status) {
            removeData('token').then(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'LoginScreen'}],
              });
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
  return (
    <View style={styles.backgroud}>
      <BGProfile width={363} height={151} />
      <View style={{marginTop: 56, marginHorizontal: 50}}>
        <View style={styles.profil}>
          <Profile width={28} height={28} style={{color: '#C4C4C4'}} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#C4C4C4',
            marginBottom: 10,
          }}></View>
        <View style={styles.profil}>
          <Email width={28} height={28} style={{color: '#C4C4C4'}} />
          <Text style={styles.text}>{email}</Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#C4C4C4',
            marginBottom: 20,
          }}></View>
        <TouchableOpacity
          style={styles.profil}
          onPress={() => {
            handleLogout();
          }}>
          <Logout width={24} height={24} style={{color: '#C4C4C4'}} />
          <Text style={styles.text2}>LOGOUT </Text>
        </TouchableOpacity>
        <View style={styles.profil}>
          <Close width={24} height={24} style={{color: '#C4C4C4'}} />
          <Text style={styles.text2}>CLOSE APP</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: '#273B69',
  },
  text: {
    fontSize: 14,
    color: '#C4C4C4',
    marginLeft: 30,
  },
  text2: {
    fontSize: 14,
    color: '#C4C4C4',
    marginLeft: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  profil: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
});
