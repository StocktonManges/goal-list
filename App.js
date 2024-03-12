import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = () => {
    if (goalInput === "") {
      return;
    }
    setCourseGoals((prevCourseGoals) => [...prevCourseGoals, goalInput]);
    setGoalInput("");
    endAddGoalHandler();
  };

  const goalInputHandler = (enteredText) => {
    setGoalInput({ text: enteredText, id: Math.random().toString() });
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <>
      {/* The native status bar that shows the time, battery life, etc. */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            goalInput={goalInput}
            addGoalHandler={addGoalHandler}
            endAddGoalHandler={endAddGoalHandler}
            goalInputHandler={goalInputHandler}
            modalIsVisible={modalIsVisible}
          />
        )}
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
          prop is needed to give the FlatList a value to use as the key. */
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goalItem={itemData.item}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
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
    color: "#b180f0",
  },
  goalItemWrapper: {
    paddingHorizontal: 10,
  },
});
