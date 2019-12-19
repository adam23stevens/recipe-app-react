import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {init, InsertClue, DeleteClues} from './helpers/sql';

init();

DeleteClues();

InsertClue('Clue 1', 'You\'ll get this so quick, It\'s really so easy. But it\'ll not always be so, easy peasy something squeezy', 2, 'nutmeg', 1);
InsertClue('Clue 2', 'Well done you clever souls! You\'re all too smart to behold. I bet you can raise the heat, In the dials you can hold', 3, 'sprouts', 0);
InsertClue('Clue 3', 'Hey you smart folks, now it\'s time to fly! Like Santa I suppose, Study the city from up high', 4, 'snowman', 0);
InsertClue('Clue 4', 'Please put back London nicely. Treat it with respect. Now somewhere is a number, a registration to inspect', 5, 'LD18 XSR', 0);
InsertClue('Clue 5', 'Golly gosh I best make this harder! You make it look easy to do. Now I sure do fancy some choklit. 25 of them will do!', 6, 'Gold rings', 0);
InsertClue('Clue 6', 'Maths is good fun eh? Now your brains are fried, I\'ll just tell you the next one. It really is chilli outside', 7, 'pantomime', 0);
InsertClue('Clue 7', 'Easy if the answer is given. I\'m now not forethcoming to please. For you\'ll need to think different, and not unlock doors with these keys', 8, 'jingle bells', 0);
InsertClue('Clue 8', '4 doors, 4 visions of you. Go left to the board, and behind to be true', 9, 'candy cane', 0);
InsertClue('Clue 9', 'A well done from me, To you gents and you ladies. Be gentle to the trees though, for they are just only babies', 10, 'santa baby', 0);
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
