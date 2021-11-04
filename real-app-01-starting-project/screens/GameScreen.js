/*The content you want to show on the screen when the game is running 
This is responsible for showing the guess of the computer and allowing the 
user to tell the computer whether that's right or wrong, if the value should be 
lower or greater, 
*/

import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";

/*Generates a random number between a minimum and a maximum which also allows
us to exclude certain numbers
*/
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = math.floor(Math.random() * (max-min) + min);
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const GameScreen = props => {
    //initalize state which is the guess of the computer
    const [currentGuess, setCurrentGuess] = useState();
};

const styles = StyleSheet.create({});

export default GameScreen;