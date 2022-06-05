import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (error) {
    return error;
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    return error;
  }
};

export const removeData = async storageKey => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (error) {
    return error;
  }
};
