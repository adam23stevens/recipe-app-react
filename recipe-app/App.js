import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {init, InsertClue, DeleteClues} from './helpers/sql';

init();

DeleteClues();

InsertClue('Clue 1', 'Something brown and sticky', 2, 'Stick', 1);
InsertClue('Clue 2', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 3', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 4', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 5', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 6', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 7', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 8', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Clue 9', 'Something brown and sticky', 2, 'Stick', 0);
InsertClue('Final Clue', 'Something brown and sticky', 2, 'Stick', 0);


const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return <AppLoading startAsync={fetchFonts} 
  //                      onFinish={() => {setFontLoaded(true)}}/>
  // }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
