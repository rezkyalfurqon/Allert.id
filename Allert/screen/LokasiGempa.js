import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';


const LokasiGempa = () => {
  return (
    <View style={styles.backgroud}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
         />
    </View>
  );
};

export default LokasiGempa;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1, alignItems: 'center',
  },
  maps: {
    width: '100%', height: '100%'
  },
});
