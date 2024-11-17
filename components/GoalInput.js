import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, showModal, closeModalHandler }) => {
  const [task, setTask] = useState("");

  const goalHandler = (task) => {
    setTask(task);
  };
  const onAddGoalHandler = () => {
    addGoalHandler(task);
    setTask("");
    closeModalHandler();
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          value={task}
          onChangeText={goalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Submit" onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 16,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
