import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoal]);
  };

 

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal!'
          onPress={addGoalHandler}
        />
      </View>
      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    marginBottom: 10,
    height: 60,
    borderWidth: 1,
    padding: 4,
    borderColor: '#cccccc',
  },
  goalsContainer: {
    marginTop: 20,
  },
  goalItem: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 5,
  },
});
