import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder='Your course goal!'
      onChangeText={props.onInputHandler}
    />
    <Button
      title='Add Goal!'
      onPress={props.onAddGoal}
    />
  </View>
  )
}

const styles = StyleSheet.create({
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
})