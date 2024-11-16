import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ label }) => {
  return (
    <Pressable>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
