import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS_Light, SIZES } from '../constants';

const EnergyUsage = () => {
    return (
        <View style={{ ...styles.container, ...styles.shadow }}>
            <LinearGradient
                useAngle
                angle={COLORS_Light.angle}
                locations={[COLORS_Light.repeat1, COLORS_Light.repeat2]}
                colors={[COLORS_Light.pink, COLORS_Light.pink2]}
                style={{
                    height: 148,
                    borderRadius: 20,
                }}
            >

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingHorizontal: SIZES.padding * 3,
        paddingVertical: SIZES.padding2
    },
    shadow: {
        shadowColor: COLORS_Light.pink,
        shadowOffset: {
	        width: 0,
	        height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 3,
    }
})

export {
    EnergyUsage
}