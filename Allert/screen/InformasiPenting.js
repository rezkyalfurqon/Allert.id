import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InformasiPenting = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            marginLeft: 14,
            marginTop: 15,
            marginBottom: 10,
          }}>
          Nomor Penting!!
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={styles.card2.text}>BNPB</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.card3.text1}>Telpon: 021-29827793</Text>
            <Text style={styles.card3.text1}>Email: contact@bnpb.go.id</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={{fontSize: 9, color: '#FFFFFF'}}>AMBULANCE</Text>
          </View>
          <View style={styles.card3}>
            <Text style={{fontSize: 18, color: '#000000'}}>118</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={styles.card2.text}>SAR</Text>
          </View>
          <View style={styles.card3}>
            <Text style={{fontSize: 18, color: '#000000'}}>115</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={styles.card2.text}>PMI</Text>
          </View>
          <View style={styles.card3}>
            <Text style={{fontSize: 18, color: '#000000'}}>(021) 7992325</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={{fontSize: 11, color: '#FFFFFF', textAlign: 'center'}}>
              DARURAT
            </Text>
          </View>
          <View style={styles.card3}>
            <Text style={{fontSize: 18, color: '#000000'}}>112</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card2}>
            <Text style={{fontSize: 11, color: '#FFFFFF', textAlign: 'center'}}>
              DAMKAR
            </Text>
          </View>
          <View style={styles.card3}>
            <Text style={{fontSize: 18, color: '#000000'}}>113</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InformasiPenting;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 320,
    height: 480,
    backgroundColor: '#E3E1E1',
    borderRadius: 10,
    marginBottom: 7,

    text: {
      fontSize: 20,
      color: '#C4C4C4',
      marginLeft: 7,
      fontWeight: 'bold',
    },
  },
  card2: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 75,
    height: 45,
    backgroundColor: '#0E1539',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-start',
    marginLeft: 10,
    justifyContent: 'center',
    marginVertical: 10,
    text: {
      fontSize: 18,
      color: '#C4C4C4',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  card3: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 190,
    height: 45,
    backgroundColor: '#C4C4C4',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-start',
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    text1: {
      fontSize: 12,
      color: '#000000',
    },
  },
});
