import React, {useState} from "react";
import { ScrollView, StyleSheet, View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { COLORS_Light, FONTS } from "../constants";
import { arrow_up_focused, lamp, not_favourite, plus_focused, water } from "../constants/icons";
import Slider from "@react-native-community/slider";


const AirCondition = ({ navigation }) => {
    // Switch Use state
    const [isEnable, setIsEnable] = useState(true);

    const toggleSwitch = () => {
        setIsEnable(previousState => !previousState)
    }

    // Circular Slider
    const [temperature, setTemperature] = useState(18);

    const onValueChange = value => {
        setTemperature(value);
    }

    return (

        <ScrollView style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
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
                    <Text style={FONTS.h2}>Next to the sofa</Text>
                    <Text style={FONTS.b5}>Consumes 1KWh</Text>
                </View>
                <TouchableOpacity style={{}}>
                    <Image source={not_favourite}/>
                </TouchableOpacity>
            </View>

            {/* Slider */}
            <View style={{alignSelf:'center'}}>
                <Switch
                    trackColor={{false: 'gray', true:COLORS_Light.pink}}
                    thumbColor={isEnable? 'white': 'white'}
                    onValueChange={toggleSwitch}
                    value={isEnable}
                />
            </View>
            <View style={styles.box}>
                <Slider
                    style={styles.slider}
                    minimumValue={18}
                    maximumValue={30}
                    minimumTrackTintColor= "#D2E0EE"
                    maximumTrackTintColor="#CCCCCC"
                    thumbTintColor="#75A7F7"
                    step={1}
                    value={temperature}
                    onValueChange={onValueChange}
                />
                <Text> Temp: {temperature} </Text>
            </View>
            {/* Mode */}
            <View style={styles.box}>
                <View>
                    <Text style={FONTS.h3}>Mode</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.mode_wrapper}>
                        <Image source={water}/>
                        <Text>Dry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mode_wrapper}>
                        <Image source={water}/>
                        <Text>Cold</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mode_wrapper}>
                        <Image source={water}/>
                        <Text>Fan</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Timer */}
            <View style={styles.box}>

                <View>
                    <Text style={FONTS.h3}>Timer</Text>
                </View>

                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                    <Image source={plus_focused}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.timer_wrapper}>
                    <View style={{alignSelf: 'flex-start', marginHorizontal:5,}}>
                        <Text style={FONTS.h1}>15:30</Text>
                        <Text style={FONTS.body4}>Turn off after __ . __</Text>
                    </View>
                    <Switch
                        style={{alignSelf: 'flex-end'}}
                        trackColor={{false: 'gray', true:COLORS_Light.pink}}
                        thumbColor={isEnable? 'white': 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnable}r
                    />
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.timer_wrapper}>
                    <View style={{alignSelf: 'flex-start', marginHorizontal:5,}}>
                        <Text style={FONTS.h1}>15:30</Text>
                        <Text style={FONTS.body4}>Turn off after __ . __</Text>
                    </View>
                    <Switch
                        style={{alignSelf: 'flex-end'}}
                        trackColor={{false: 'gray', true:COLORS_Light.pink}}
                        thumbColor={isEnable? 'white': 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnable}r
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.timer_wrapper}>
                    <View style={{alignSelf: 'flex-start', marginHorizontal:5,}}>
                        <Text style={FONTS.h1}>15:30</Text>
                        <Text style={FONTS.body4}>Turn off after __ . __</Text>
                    </View>
                    <Switch
                        style={{alignSelf: 'flex-end'}}
                        trackColor={{false: 'gray', true:COLORS_Light.pink}}
                        thumbColor={isEnable? 'white': 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnable}r
                    />
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

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

    },
    mode_wrapper: {
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
    timer_wrapper: {
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

export default AirCondition;