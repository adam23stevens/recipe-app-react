import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colours } from '../constants/colours';

const CategoriesScreen = props => {

    const gotoMeals = () => {
        props.navigation.navigate({routeName: 'CategoriesMeals'});
    }

    const renderItem = (itemData) => {
        return (
        <TouchableOpacity onPress={() => props.navigation.navigate('CategoriesMeals')} style={styles.gridItem}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2}/>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Colours.primary
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;