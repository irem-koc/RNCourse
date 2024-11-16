import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setTasks={setTasks} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={tasks}
          renderItem={(item, i) => <GoalItem label={item.item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
