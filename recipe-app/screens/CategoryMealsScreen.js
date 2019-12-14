import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const CategoriesMealsScreen = props => {

    const gotoMeal = () => {
        props.navigation.navigate({routeName: 'MealDetails'})
    }

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="View Meal" onPress={gotoMeal}/>
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

export default CategoriesMealsScreen;