import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from "react-native-iphone-x-helper";

import { Home } from "../../screens";
import { COLORS_Light, FONTS, icons } from "../../constants";


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS_Light.white }}></View>
                    <Svg
                        width={70}
                        height={58}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS_Light.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS_Light.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS_Light.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 50,
                    backgroundColor: COLORS_Light.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBarIphone = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        height: 30,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: COLORS_Light.background
                    }}
                >
                </View>
                <BottomTabBar {...props.props} />
            </View>
        )
    }
    else return (
        <BottomTabBar {...props.props} />
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    height: 50,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 15
                },
                tabBarShowLabel: false,
                headerShown: false
            })
            }
            initialRouteName={"Home"}
            tabBar={(props) => (
                <CustomTabBarIphone
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaskedView 
                            style={styles.maskedView}
                            maskElement={
                                <View style={styles.maskWrapper}>
                                    <Image
                                        source={icons.home_focused}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                            }
                        >
                            {focused  
                                ? <View style={styles.mask}>
                                    <LinearGradient 
                                    colors={['#FF00C7', '#5A2CBA']}
                                    style={{ height: 25, width: 25}}
                                    ></LinearGradient>
                                </View>
                                : <View style={{...styles.mask, backgroundColor: COLORS_Light.lightBlue}}></View>
                            }
                        </MaskedView>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaskedView 
                            style={styles.maskedView}
                            maskElement={
                                <View style={styles.maskWrapper}>
                                    <Image
                                        source={icons.schedule_focused}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                            }
                        >
                            {focused  
                                ? <View style={styles.mask}>
                                    <LinearGradient 
                                    colors={['#FF00C7', '#5A2CBA']}
                                    style={{ height: 25, width: 25}}
                                    ></LinearGradient>
                                </View>
                                : <View style={{...styles.mask, backgroundColor: COLORS_Light.lightBlue}}></View>
                            }
                        </MaskedView>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Scripts"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaskedView 
                            style={styles.maskedView}
                            maskElement={
                                <View style={styles.maskWrapper}>
                                    <Image
                                        source={icons.document_focused}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                            }
                        >
                            {focused  
                                ? <View style={styles.mask}>
                                    <LinearGradient 
                                    colors={['#FF00C7', '#5A2CBA']}
                                    style={{ height: 25, width: 25}}
                                    ></LinearGradient>
                                </View>
                                : <View style={{...styles.mask, backgroundColor: COLORS_Light.lightBlue}}></View>
                            }
                        </MaskedView>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaskedView 
                            style={styles.maskedView}
                            maskElement={
                                <View style={styles.maskWrapper}>
                                    <Image
                                        source={icons.setting_focused}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                            }
                        >
                            {focused  
                                ? <View style={styles.mask}>
                                    <LinearGradient 
                                    colors={['#FF00C7', '#5A2CBA']}
                                    style={{ height: 25, width: 25}}
                                    ></LinearGradient>
                                </View>
                                : <View style={{...styles.mask, backgroundColor: COLORS_Light.lightBlue}}></View>
                            }
                        </MaskedView>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    maskedView: {
        flex: 1,
        flexDirection: 'row',
        height: '100%'
    },
    maskWrapper: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mask: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Tabs;