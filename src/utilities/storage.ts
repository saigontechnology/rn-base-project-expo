import AsyncStorage from '@react-native-async-storage/async-storage'

export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    console.log(e)
    // Do something if there is error
  }
}

export const setData = async (key: string, data: unknown): Promise<void> => {
  const stringValue = typeof data === 'string' ? data : JSON.stringify(data)
  try {
    await AsyncStorage.setItem(key, stringValue)
  } catch (e) {
    console.log(e)
    // Do something if there is error
  }
}

export const getData = async <T>(key: string): Promise<T | string | null> => {
  const jsonValue = await AsyncStorage.getItem(key)
  try {
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log(e)
    return jsonValue
  }
}

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
    // Do something if there is error
  }
}
