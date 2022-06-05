import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconProfil from '../assets/profile.svg';
import Antisipasi1 from '../assets/antisipasi1.svg';
import Antisipasi2 from '../assets/antisipasi2.svg';
import Antisipasi3 from '../assets/antisipasi3.svg';
import Antisipasi4 from '../assets/antisipasi4.svg';
import Antisipasi5 from '../assets/antisipasi5.svg';
import IconMaps from '../assets/iconmaps.svg';
import { getData } from '../utils';

const HomeScreen = ({navigation}) => {
  const [name, setname] = useState('');
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
        })
        .catch(err => {
          console.log(err);
        });
    });
  }, []);
  return (
    <View style={styles.backgroud}>
      <View style={{flexDirection: 'row', marginTop: 20}} >
        
        <IconProfil width={32} height={36} style={{color: '#EEF2F5'}} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>Hai,</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>

      <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
        <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
          <Text style={styles.card.text}>
            Pastikan struktur dan letak rumah dapat terhindar dari bahaya
            gempabumi
          </Text>
        </View>
        <View style={styles.card}>
          <Antisipasi2 style={styles.card.picture} />
          <Text style={styles.card.text}>
            Kenali Lingkungan Tempat Anda Bekerja
          </Text>
        </View>
        <View style={styles.card}>
          <Antisipasi3 style={styles.card.picture} />
          <Text style={styles.card.text}>
            Persiapkan secara rutin pada tempat Anda bekerja dan tinggal
          </Text>
        </View>
        <View style={styles.card}>
          <Antisipasi4 style={styles.card.picture} />
          <Text style={styles.card.text}>
            Atur benda yang berat sedapat mungkin berada pada bagian bawah
          </Text>
        </View>
        <View style={styles.card}>
          <Antisipasi5 style={styles.card.picture} />
          <Text style={styles.card.text}>
            Sediakan selalu kotak P3K dan senter/lampu baterai
          </Text>
        </View>
      </ScrollView>
      <View style={styles.card2}>
        <View style={{flexDirection: 'row'}}>
          <IconMaps width={25} height={40} style={{color: '#000000'}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.card2.text}>Lokasi Anda</Text>
            <Text style={styles.card2.text2}>Bojongsoang, Bandung</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.Button.ButtonStyle}
          onPress={() => {
            navigation.navigate('TabBottom');
          }}>
          <Text style={styles.Button.ButtonText}>Status Aman</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.card3}
        onPress={() => {
          navigation.navigate('InformasiPenting');
        }}>
        <Text style={styles.card3.text}>Rescue...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#273B69',
  },
  card: {
    justifyContent: 'center',
    width: 162,
    height: 205,
    borderRadius: 10,
    backgroundColor: '#EEF2F5',
    marginRight: 15,
    marginTop: 20,
    picture: {
      marginTop: 10,
      alignSelf: 'center',
      height: 95,
      width: 85,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    text: {
      paddingHorizontal: 15,
      marginTop: 7,
      textAlign: 'center',
      fontSize: 14,
      color: '#535E79',
      marginLeft: 7,
    },
  },
  text: {
    fontSize: 14,
    color: '#EEF2F5',
    marginLeft: 7,
  },
  card2: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    height: 142,
    backgroundColor: '#EEF2F5',
    alignSelf: 'center',
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    text: {
      fontSize: 14,
      color: '#535E79',
      marginLeft: 7,
    },
    text2: {
      fontSize: 17,
      color: '#000000',
      marginLeft: 7,
      fontWeight: 'bold',
    },
  },
  card3: {
    width: '90%',
    height: 50,
    backgroundColor: '#0E1539',
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 50,
    paddingHorizontal: 20,
    text: {
      paddingVertical: 10,
      fontSize: 18,
      color: '#FFFFFF',
      marginLeft: 7,
    },
  },
  Button: {
    ButtonStyle: {
      alignSelf: 'flex-end',
      width: 160,
      backgroundColor: '#273B69',
      borderRadius: 20,
      paddingVertical: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    ButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
