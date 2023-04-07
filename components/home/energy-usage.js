import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS_Light, SIZES, FONTS, icons } from '../../constants';

const EnergyUsage = () => {
    const arrow_direction = {"up": "0deg", "down": "180deg"}
    return (
        <View style={{ ...styles.container, }}>
            <View style={{ ...styles.shadow, borderRadius: 20, }}>
                <LinearGradient
                    useAngle
                    angle={COLORS_Light.angle}
                    colors={[COLORS_Light.pink, COLORS_Light.pink2]}
                    locations={[COLORS_Light.repeat1, COLORS_Light.repeat2]}
                    style={{
                        height: 148,
                        borderRadius: 20,
                        padding: 20,
                        ...styles.shadow
                    }}

                >
                    <View style={{ ...styles.upperBox }}>
                        <View>
                            <Text style={{ ...styles.h4 }}>Energy Usage</Text>
                        </View>
                        <TouchableOpacity style={{ ...styles.circle }}>
                            <View style={{ ...styles.dot }}></View>
                            <View style={{ ...styles.dot }}></View>
                            <View style={{ ...styles.dot }}></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.lowerBox }}>
                        <View style={{ ...styles.lowerBoxCompenent }}>

                            <View style={{ ...styles.day }}>
                                <Text style={{ ...styles.h5 }}>
                                    Today
                                </Text>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', paddingLeft: 5 }}>
                                <View style={{ flexDirection: "row", alignItems: "center"}}>
                                    <Image
                                        source={icons.arrow_up_focused}
                                        style={[
                                            { tintColor: COLORS_Light.white, },
                                            {transform: [{rotate: arrow_direction.down}]}
                                        ]}
                                    ></Image>
                                    <Text style={{ ...styles.h4 }}>
                                        30.7 kWh
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.lowerBoxCompenent }}>
                            <View style={{ ...styles.day }}>
                                <Text style={{ ...styles.h5 }}>
                                    This month
                                </Text>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', paddingLeft: 5 }}>
                                <View style={{ flexDirection: "row", alignItems: "center"}}>
                                    <Image
                                        source={icons.arrow_up_focused}
                                        style={[
                                            { tintColor: COLORS_Light.white, },
                                            {transform: [{rotate: arrow_direction.up}]}
                                        ]}
                                    ></Image>
                                    <Text style={{ ...styles.h4 }}>
                                        30.7 kWh
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

circle_radius = 20
const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingHorizontal: SIZES.padding * 3,
        paddingVertical: SIZES.padding2,
        color: COLORS_Light.white
    },
    shadow: {
        shadowColor: COLORS_Light.pink,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        backgroundColor: COLORS_Light.pink,
        elevation: 20,
    },
    upperBox: {
        flex: 0.3,
        height: 0,
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderBottomWidth: 0.4,
        borderBottomColor: COLORS_Light.white,
        color: COLORS_Light.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    circle: {
        height: circle_radius,
        width: circle_radius,
        borderRadius: circle_radius / 2,
        backgroundColor: COLORS_Light.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2.5,
    },
    dot: {
        height: circle_radius / 8,
        width: circle_radius / 8,
        borderRadius: circle_radius / 16,
        backgroundColor: COLORS_Light.pink
    },
    lowerBox: {
        height: 0,
        flex: 0.7,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lowerBoxCompenent: {
        flex: 0.5,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    day: {
        flex: 0.5,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    h4: {
        ...FONTS.h4,
        color: COLORS_Light.white
    },
    h5: {
        ...FONTS.h5,
        color: COLORS_Light.white
    }
})

export {
    EnergyUsage
}