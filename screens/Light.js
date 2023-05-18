import React, {useState} from "react";
import { ScrollView, SafeAreaView, StyleSheet, View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { COLORS_Light, FONTS } from "../constants";
import { arrow_up_focused, lamp, not_favourite, plus_focused, water } from "../constants/icons";
import Slider from "@react-native-community/slider";
import { changeState } from "../controller/data/devices";

const Light = ({ route, navigation }) => {

    const [color, setColor] = useState('#000000');

    
    let { item } = route.params;

    const [isEnable, setIsEnable] = useState(item.state === 0 ? false : true);
    const toggleSwitch = (previousState) => {
        setIsEnable(previousState)
        changeState(item.id)
    };

    /// Slider Use state
    const [lightLevel, setLightLevel] = useState(0);

    const onValueChange = value => {
        setLightLevel(value);
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
                    <Text style={FONTS.h2}>{ item.name }</Text>
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
                <Text style={{alignSelf:"center"}}>{lightLevel} %</Text>
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

export default Light;