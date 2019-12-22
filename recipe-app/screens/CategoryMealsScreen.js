import React, { useState } from 'react';
import { Text, View, Button, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
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
    const onTextInput = (t) => {
        setClueText(t);
    }

    const onClueSubmit = () => {
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

    if (clue.unlocksClueId > 50) {
        return (
            <View style={styles.screen}>
                <View>
                    <Text style={styles.clueText}>{clue.clueText}</Text>
                </View>
            </View>
        )
    }
    else
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.clueText}>{clue.clueText}</Text>
    
            </View>
            <View style={styles.bottomView}>
            <TextInput placeholder="Answer..."
                    onChangeText={t => onTextInput(t)}
                    value={clueText}
                    style={styles.ClueInput} />
                <Button onPress={onClueSubmit} title="Guess!"/>
            </View>
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
        height: '40%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCD6EA'
    },
    clueText: {
        margin: 10,
        fontSize: 20,
        color: '#C41E75'
    },
    mealList: {
        width: '100%',
        padding: 3
    },
    clueInput: {
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18
    },
    bottomView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    }
});

export default CategoriesMealsScreen;