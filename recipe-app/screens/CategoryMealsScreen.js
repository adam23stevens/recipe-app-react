import React, { useState } from 'react';
import { Text, View, Button, FlatList,TextInput, StyleSheet, Alert} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { Colours } from '../constants/colours';
import MealItem from '../components/MealItem';
import { GetById, UnlockClue } from '../helpers/sql';

const CategoriesMealsScreen = props => {
    const [clue, setClue] = useState('');
    const [isLoaded, setIsLoaded] = useState('');
    const [clueText, setClueText] = useState('');
    const clueId = props.navigation.getParam('clueId');
    const onClueUpdate = props.navigation.getParam('onClueUpdate');

    if (!isLoaded) {
        GetById(clueId).then(c => {
            setClue(c.rows._array[0]);
        });
        setIsLoaded(true);
    }
    const onTextInput =(t) => {
        setClueText(t);
    }
    
    const onClueSubmit= () => {
        if (clueText.toUpperCase() === clue.answer.toUpperCase()) {
            Alert.alert("you got it right!");

            UnlockClue(clue.unlocksClueId).then(c => {
                onClueUpdate();
            });
        } else {
            Alert.alert("Try again loser");
        }


        setClueText('');
    }

    //const selectedMeals = MEALS.filter(m => m.categoryIds.indexOf() > -1);


    // const renderMealItem = (itemData) => {
    //     return (
    //         // <MealItem title={itemData.item.title}
    //         //     duration={itemData.item.duration}
    //         //     complexity={itemData.item.complexity}
    //         //     affordability={itemData.item.affordability}
    //         //     image={itemData.item.imageUrl}
    //         //     onSelectMealItem={() => {
    //         //         props.navigation.navigate({
    //         //             routeName: 'MealDetails',
    //         //             params: { mealId: itemData.item.id }
    //         //         })
    //         //     }} />
    //         <View><Text>{itemData.</Text></View>
    //     )
    // }

    return (
        <View style={styles.screen}>

            <Text>{clue.clueText}</Text>
            <TextInput placeholder="Answer..." 
            onChangeText={t => onTextInput(t)} 
            value={clueText} 
            style={styles.ClueInput}/>

            <Button onPress={onClueSubmit} title="Guess!"/>
        </View>
    )
}

CategoriesMealsScreen.navigationOptions = navigationData => {
    // const categoryId = navigationData.navigation.getParam('categoryId');
    // const category = CATEGORIES.find(c => c.id === categoryId);

    // return {
    //     headerTitle: category.title
    // }
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
    },
    clueInput: {
        marginTop: 10,
        borderColor: 'black',
        borderWidth:2
    }
});

export default CategoriesMealsScreen;