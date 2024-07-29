import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem} >
                <Text>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem


const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 5,
    },
});