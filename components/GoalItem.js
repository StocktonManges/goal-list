import { StyleSheet, View, Text } from "react-native";

export default function GoalItem({ goalText }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  goalText: {
    color: "#fff",
  },
});
