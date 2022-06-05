import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoIcon from '../assets/logoicon.svg';
import LogoBaru from '../assets/logobaru.svg';
import {getData} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getData('token').then(res => {
      if (res !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'TabBottom'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <LogoIcon width={181} height={55} style={{marginTop: 200}} />
      <LogoBaru width={250} height={55.71} style={{marginTop: 30}} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#273B69',
    flex: 1,
  },
});
