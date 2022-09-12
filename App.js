import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';


export default function App() {
  
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);
  const [sign, setSign] = useState('');

  const button1Pressed = () => {
    var result = value1 + value2;
    setResult(result);
    setData([...data, { key1: value1, key2: value2, key3: result }]);
    setSign('+');
  }
  
  const button2Pressed = () => {
    var result = value1 - value2;
    setResult(result);
    setData([...data, { key1: value1, key2: value2, key3: result }]);
    setSign('-')
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Result: {result} </Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={value1 => setValue1(parseInt(value1))} value={value1}/>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={value2 => setValue2(parseInt(value2))} value={value2}/>
      </View>
      <View style={styles.buttons}>
        <Button title='+' onPress={button1Pressed}/>
        <Button title='-' onPress={button2Pressed}/>
      </View>
      <Text style={{marginTop: 30, color: 'blue', fontSize: 15}}>History</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key1} {sign} {item.key2} = {item.key3}</Text>
        }
      />
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    width: 100,
    margin: 7,
    borderWidth: 1,
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
    
  },
  
});