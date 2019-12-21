import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {init, InsertClue, DeleteClues} from './helpers/sql';

init();

DeleteClues();

InsertClue('Clue 1', 'Let\'s start this off simple. This is easier than most. You\'ll not always be so jammy, spreading it on toast', 2, 'sprouts', 1);
InsertClue('Clue 2', 'Well done for the first one. Next is a game in itself. Where else would you find all the villagers on the shelf', 3, 'stocking', 0);
InsertClue('Clue 3', 'Doing so well now. You fill me with pride. Wait, what\'s that sound? Is that Rudolph outside?!', 4, 'snowman', 0);
InsertClue('Clue 4', 'Good going so far. Is reading a hobby? Please do watch out, keep off the track Bobbie!', 5, 'LD18 XSR', 0);
InsertClue('Clue 5', 'Golly gosh I best make this harder! You make it look easy to do. Now I sure do fancy some choklit. 25 of them will do!', 6, 'Gold rings', 0);
InsertClue('Clue 6', 'Binary is good fun eh, now you\'re all in for a treat. Just ppppick up the next one under some happy feet.', 7, 'pantomime', 0);
InsertClue('Clue 7', 'This next one is written on a door that\'s quite large. To give you a further clue, it rhymes with Nigel Farage', 8, 'jingle bells', 0);
InsertClue('Clue 8', 'You\'ve been running and searching. You\'ve been all round the block. To find this next one, look in the big sock', 9, 'santa baby', 0);
InsertClue('Final Clue', 'Now bounce up and spring, for all you need to win, is dial me up and ring, AND GIVE A GOOD CHRISTMASSY SING!', 99, '', 0);


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
