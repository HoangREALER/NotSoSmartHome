import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { COLORS_Light } from "../constants";
import { HomeHeader, EnergyUsage } from "../components";
import { Text } from "react-native";
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>hello</Text>
            <HomeHeader/>
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

})

export default Home;