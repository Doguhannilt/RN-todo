import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, FlatList, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoal, key: Math.random().toString() }]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} onInputHandler={goalInputHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />
          );
        }}
        style={styles.goalsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
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
