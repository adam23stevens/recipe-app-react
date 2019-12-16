import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { Colours } from '../constants/colours';
import MealItem from '../components/MealItem';

const CategoriesMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const selectedMeals = MEALS.filter(m => m.categoryIds.indexOf(categoryId) > -1);

    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMealItem={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetails',
                        params: { mealId: itemData.item.id }
                    })
                }} />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.mealList} data={selectedMeals} renderItem={renderMealItem} />
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
    },
    mealList: {
        width: '100%',
        padding: 3
    }
});

export default CategoriesMealsScreen;