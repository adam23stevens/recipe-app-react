import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colours } from '../constants/colours';

const CategoriesMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');

    const category = CATEGORIES.find(c => c.id === categoryId);

    const gotoMeal = () => {
        props.navigation.navigate({ routeName: 'MealDetails' })
    }

    return (
        <View style={styles.screen}>
            <Text>{category.title}</Text>
            <Button title="View Meal" onPress={gotoMeal} />
        </View>
    )
}

CategoriesMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const category = CATEGORIES.find(c => c.id === categoryId);

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;