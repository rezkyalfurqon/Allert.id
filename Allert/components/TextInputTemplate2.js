import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const TextInputTemplate2 = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{color: '#BDBDBD'}}
        placeholderTextColor={'#BDBDBD'}
        placeholder={props.placeholder || ''}
        keyboardType={props.type}
        onChangeText={props.setValue}
        value={props.value}
        secureTextEntry
      />
    </View>
  );
};

export default TextInputTemplate2;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#1A2A52',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 12,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
