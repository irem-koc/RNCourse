import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const goalHandler = (task) => {
    setTask(task);
  };
  const handleSubmit = () => {
    setTask("");
    setTasks((prev) => [{ title: task, id: Math.random() }, ...prev]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        value={task}
        onChangeText={goalHandler}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
