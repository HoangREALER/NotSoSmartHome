import React, {useState} from "react";
import { ScrollView, SafeAreaView, StyleSheet, View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { COLORS_Light, FONTS } from "../constants";
import { EnergyUsage } from "../components";
import { SubHeader, HomeHeader } from "../components/header";
import { arrow_up_focused, lamp, not_favourite, plus_focused, water } from "../constants/icons";



const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>hello</Text>

            <HomeHeader/>
            <EnergyUsage/>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS_Light.background
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowOffset: 3,
        elevation: 1,
    },  
    slider: {
        width: 300,
        height: 40,
      },


})

export default Home;