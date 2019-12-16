import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colours } from '../constants/colours';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = props => {

    const renderItem = (itemData) => {
        return (
            <CategoryTile
            title={itemData.item.title}
            colour={itemData.item.colour}
            onTileSelect= {
                () => props.navigation.navigate({
                    routeName: 'CategoriesMeals',
                    params: { categoryId: itemData.item.id}
                })} />
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;