import { useState, useRef } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    if (goalInput === "") {
      return;
    }
    setCourseGoals((prevCourseGoals) => [...prevCourseGoals, goalInput]);
    setGoalInput("");
  };

  const goalInputHandler = (enteredText) => {
    setGoalInput({ text: enteredText, key: Math.random().toString() });
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInput={goalInput}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.yourGoalsText}>Your goals:</Text>
        {/* ScrollView renders every child element when the rest of the 
        page is rendered, but FlatList renders only what is visible on 
        the screen to improve performance. */}
        <FlatList
          style={styles.goalItemWrapper}
          data={courseGoals}
          /* If the data that is passed to the data prop is an object with a 
          key property, FlatList will automatically use it as the unique
          key property of the returned elements. Otherwise, the keyExtractor
          prop is needed to return give the FlatList a value to use as the key. */
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => {
            return <GoalItem goalText={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
    paddingVertical: 10,
  },
  yourGoalsText: {
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
  goalItemWrapper: {
    paddingHorizontal: 10,
  },
});
