import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goalItem, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      {/* The Pressable component tells react-native that the child component is
      pressable.
      .bind() allows a function to be called with an argument
      if it just points to the function instead of actually calling it. */}
      <Pressable
        onPress={deleteGoalHandler.bind(this, goalItem.id)}
        android_ripple={{ color: "#210644" }}
        // The "pressed" property is a boolean given by the Pressable
        // component.
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goalItem.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
  pressedItem: {
    backgroundColor: "#210644",
  },
  goalText: {
    color: "#fff",
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
