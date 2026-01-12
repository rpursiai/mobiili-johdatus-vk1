import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("")
  const parsed = Number(age)
  const isValid = age.trim() !== "" && Number.isFinite(parsed)
  const lowerLimit = isValid ? (220-parsed) * 0.65 : 0
  const higherLimit = isValid ? (220-parsed) * 0.85 : 0 

    return (
     <View style={styles.container}>
     <Text style={styles.heading}>Heart rate limits calculator</Text>
       <TextInput
         placeholder="enter your age here"
         keyboardType="number-pad"
         value={age}
         onChangeText={ setAge}
       />
       <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
       <Text style={styles.text}>Higher limit: {higherLimit.toFixed(2)} bpm</Text>
     </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
margin: 16
},
heading: {
fontSize: 24,
marginTop: 32,
marginBottom: 16
},
text: {
marginVertical: 16
}
});
