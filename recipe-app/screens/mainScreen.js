import React from 'react';
import { Text, View, Button, FlatList, TextInput, StyleSheet, ImageBackground } from 'react-native';



const MainScreen = props => {

    const onPressGo = () => {
        props.navigation.navigate({
            routeName: 'Categories',
        });
    }

    return (
        <ImageBackground source={require('../assets/tinsel.png')} style={styles.main}>
            <Text style={styles.text}>Do not press GO until told!</Text>
            <Button onPress={onPressGo} style={styles.button} title="GO!" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        alignContent: 'flex-end'
    },
    text: {
        color: 'red',
        fontSize: 20
    }
})

export default MainScreen;