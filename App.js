import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    width: '80%',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
