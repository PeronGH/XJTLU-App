import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Store a string value in the storage
 * @param key
 * @param value
 */
export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

/**
 * Get a string value from the storage
 * @param key
 */
export const getString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

/**
 * Store an object in the storage
 * @param key
 * @param value
 */
export const storeObject = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

/**
 * Get an object from the storage
 * @param key
 */
export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
