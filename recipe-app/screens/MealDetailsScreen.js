import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {
    const selectedMealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(f => f.id === selectedMealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;