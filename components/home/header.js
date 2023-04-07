import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import { COLORS_Light, FONTS, icons, images, theme } from "../../constants";
import { SIZES, } from "../../constants";


// Change this later
const avatar = images.avatar

const HomeHeader = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row", height: 72 }}>
            <View 
                style={{
                    flex: 1,
                    alignItems: "center", 
                    justifyContent: "center",
                    padding: SIZES.padding
                }}>
                <View>
                    <Text style={{color: "#000" , ...FONTS.h3 }}>
                        Welcome home, Rakim Mayer
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    width: 60,
                    paddingRight: SIZES.padding * 3,
                    justifyContent: 'center',
                }}
            >
                <UserAvatar
                    name="Rakim Mayer"
                    component={
                        <Image source={avatar} style={{
                            width: 54,
                            height: 54,
                            borderRadius: 27
                        }}/>
                    }
                    size={54}
                    borderRadius={27}
                />
                <View style={{
                    backgroundColor: 'green',
                    position: 'absolute',
                    height:12,
                    width:12,
                    right:20,
                    top:10,
                    borderRadius:6
                }}> 

                </View>
            </TouchableOpacity>
        </View>

        
    )
}

export {
    HomeHeader,
}