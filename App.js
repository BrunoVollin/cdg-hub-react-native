import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCounter() {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Button title="+ 1" onPress={addCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly", // espaçamento entre os componentes
  },

  counter: {
    fontSize: 40,
  },
});
