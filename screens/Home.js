import React, {useState} from "react";
import { ScrollView, SafeAreaView, StyleSheet, View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { COLORS_Light, FONTS } from "../constants";
import { EnergyUsage } from "../components";
import { SubHeader, HomeHeader } from "../components/header";
import { arrow_up_focused, lamp, not_favourite, plus_focused, water } from "../constants/icons";
import Slider from "@react-native-community/slider";
import ColorPicker from "react-native-wheel-color-picker";
const Home = () => {

    const [color, setColor] = useState('#000000');

    
    // Switch Use state
    const [isEnable, setIsEnable] = useState(true);

    const toggleSwitch = () => {
        setIsEnable(previousState => !previousState)
    }

    /// Slider Use state
    const [lightLevel, setLightLevel] = useState(0);

    const onValueChange = value => {
        setLightLevel(value);
    }

    return (
        // <SafeAreaView style={styles.container}>
        //     <Text>hello</Text>

        //     <HomeHeader/>
        //     <EnergyUsage/>
        // </SafeAreaView>
        <ScrollView style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={arrow_up_focused} style={{transform:[{rotate: '-90deg'}]}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, backgroundColor: COLORS_Light.background, borderRadius:20}}>
                    <Image source={lamp} style={{tintColor: COLORS_Light.primary}}/>
                </TouchableOpacity>
                <View  
                    style={{        
                        flex: 1,
                        alignItems:'center',
                        justifyContent: 'center'}}>
                    <Text style={FONTS.h2}>By the bed</Text>
                    <Text style={FONTS.b5}>Consumes 1KWh</Text>
                </View>
                <TouchableOpacity style={{}}>
                    <Image source={not_favourite}/>
                </TouchableOpacity>

            </View>

            <View style={{alignSelf:'center'}}>
                <Switch
                    trackColor={{false: 'gray', true:COLORS_Light.pink}}
                    thumbColor={isEnable? 'white': 'white'}
                    onValueChange={toggleSwitch}
                    value={isEnable}
                />
            </View>

            {/* Color Picker */}
            <View style={[]}>
				<ColorPicker
					ref={r => { this.picker = r }}
					color={this.state.currentColor}
					swatchesOnly={this.state.swatchesOnly}
					onColorChange={this.onColorChange}
					onColorChangeComplete={this.onColorChangeComplete}
					thumbSize={40}
					sliderSize={40}
					noSnap={true}
					row={false}
					swatchesLast={this.state.swatchesLast}
					swatches={this.state.swatchesEnabled}
					discrete={this.state.disc}
				/>
				<SomeButton onPress={() => this.picker.revert()} />
			</View>


            {/* Color Slider */}
            <View style={styles.box}>
                <Text style={{alignSelf:"center"}}>0%</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor= "#D2E0EE"
                    maximumTrackTintColor="#CCCCCC"
                    thumbTintColor="#75A7F7"
                    step={1}
                    value={lightLevel}
                    onValueChange={onValueChange}
                />
                <Text style={{alignSelf:"center"}}>100%</Text>
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS_Light.background
    },
    header: {
        flex: 1,
        padding:20,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    box: {
        padding: 20,
        backgroundColor: '#ffffff', // change this to your desired background color
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        borderRadius:20,
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
    },

    wrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff', // change this to your desired background color
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        borderRadius:20,
        marginHorizontal: 10,
        marginVertical: 5,

        alignItems:'center',
        justifyContent: 'center'
    },

    colorPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20
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