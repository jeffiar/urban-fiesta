import { AsyncStorage } from 'AsyncStorage';

const _getTime = async (chart) => {
  let value;
  try {
    const value = await AsyncStorage.getItem(chart);
    if (value !== null) {
      // We have data!!
      console.log(value);
      try {
        await AsyncStorage.setItem(chart, value + 1);
      } catch (error) {
        // Error saving data
      }
    }
   } catch (error) {
     // Error retrieving data
   }
   return value;
}

export default _getTime;
