import React, {useState} from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colours } from '../constants/colours';
import CategoryTile from '../components/CategoryTile';
import { SelectAllClues , SelectTopClue } from '../helpers/sql';
import { Updates } from 'expo';

const CategoriesScreen = props => {
    const [allClues, setClues] = useState('');
    const [hasLoaded, setHasLoaded] = useState('');

    if (!hasLoaded) {
        SelectAllClues().then(t => {
            updates(t.rows._array);
        });
    }
    
    const onGuessMade = () => {
        setHasLoaded(false);
    }

    const updates = (clues) => {
        setClues(clues)
        setHasLoaded(true);
    }

    const renderItem = (itemData) => {
        return (
            <CategoryTile
            title={itemData.item.title}
            colour='#f45353'
            onTileSelect= {
                () => props.navigation.navigate({
                    routeName: 'CategoriesMeals',
                    params: { clueId: itemData.item.id, onClueUpdate: onGuessMade}
                })} />
        )
    }

    return (
        //<View><Text>{oneClue.title}</Text></View>
        //<View style={styles.test}><Text></Text></View>
        <FlatList data={allClues} renderItem={renderItem} numColumns={2} />
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
    },
    test: {
        flex: 1
    }
});

export default CategoriesScreen;