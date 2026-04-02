import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const COLORS = [
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#22c55e" },
  { name: "Purple", value: "#a855f7" },
  { name: "Orange", value: "#f97316" },
];

export default function ColorCard() {
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    const nextIndex = (index + 1) % COLORS.length;
    setIndex(nextIndex);
  };

  const currentColor = COLORS[index];

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: currentColor.value }]}>
        <Text style={styles.text}>{currentColor.name}</Text>

        <TouchableOpacity style={styles.button} onPress={changeColor}>
          <Text style={styles.buttonText}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
  },
  card: {
    width: 250,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    // Shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Shadow (Android)
    elevation: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});