import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const CustomNumericInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleNumberPress = (number) => {
    setInputValue(currentValue => currentValue + number);
  };

  const handleBackspacePress = () => {
    setInputValue(currentValue => currentValue.slice(0, -1));
  };

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'back', 0, 'return'];

  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.displayArea}>
        <Text style={styles.displayText}>{inputValue}</Text>
      </View>
      <View style={styles.numberPad}>
        {buttons.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.numberButton}
            onPress={() => {
              if (item === 'back') {
                handleBackspacePress();
              } else if (item === 'return') {
                // Handle return press (e.g., submit the value)
              } else {
                handleNumberPress(item.toString());
              }
            }}>
            <Text style={styles.numberText}>{item === 'back' ? '<-' : item === 'return' ? 'Return' : item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Or any other background color you prefer
  },
  container: {
  flex: 1,
  justifyContent: 'flex-start', // Align items to the start
  alignItems: 'center',
  paddingTop: 30, // Adjust top padding as needed
},
  displayArea: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',   
    borderRadius: 15,          
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,              
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 24,
    color: '#333',             
    fontWeight: 'bold',        
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButton: {
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  numberText: {
    fontSize: 24,
  },
  // ... other styles ...
});

export default CustomNumericInput;