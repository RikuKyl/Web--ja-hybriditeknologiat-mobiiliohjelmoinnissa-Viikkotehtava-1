import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');

   const handleAgeChange: number =
    !isNaN(Number(age)) === true ? Number(age) : 0
    const LowerHr: number = (220 - handleAgeChange) * 0.65;
    const UpperHr: number = (220 - handleAgeChange) * 0.85;


  return (
    <View style={styles.container}>
      <Text>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
      placeholder="Age"
      keyboardType='number-pad' 
      style={styles.field} 
      value={age} 
      onChangeText={setAge} 
      />

      <Text style={styles.field}>Lower Limit: {LowerHr.toFixed(2)} bpm</Text>
      <Text style={styles.field}>Upper Limit: {UpperHr.toFixed(2)} bpm</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginTop: 20,
  },
});