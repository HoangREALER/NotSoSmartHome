import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { COLORS_Light } from "../constants";
import { HomeHeader } from "../components";
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader/>
                        <Text>Home</Text>
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