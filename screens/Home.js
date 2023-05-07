import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { COLORS_Light } from "../constants";
import { HomeHeader, EnergyUsage, HomeBody } from "../components/home";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HomeHeader />
                <EnergyUsage />
                <HomeBody navigation={navigation}/>
            </ScrollView>
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
        shadowRadius: 3,
        elevation: 1,
    },

})

export default Home;