import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from "react-native-iphone-x-helper";

import { Home } from "../../screens";

import { COLORS_Light, FONTS, icons } from "../../constants";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ addButton, children, onPress }) => {

    var isSelected = addButton
    if (isIphoneX()) {
        eleStyle = {
            flex: 1,
            height: 60,
            backgroundColor: COLORS_Light.background,
        }
    } else {
        eleStyle = {
            flex: 1,
            backgroundColor: COLORS_Light.background,
        }
    }

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center", elevation: 10 }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS_Light.background }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS_Light.background}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS_Light.background }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -32,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 55,
                        height: 55,
                        borderRadius: 27.5,
                        backgroundColor: COLORS_Light.primary,
                        shadowColor: COLORS_Light.primary,
                        elevation: 3
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
                style={eleStyle}
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
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    position: 'absolute',
                    elevation: 0
                },
                tabBarActiveTintColor: COLORS_Light.background_constrast,
                tabBarInactiveTintColor: COLORS_Light.lightBlue,
                tabBarLabelStyle: FONTS.label,
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
                        <Image
                            source={icons.home_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
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
                        <Image
                            source={icons.schedule_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue,
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Add"
                component={Home}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.plus_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS_Light.background
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            addButton
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Scripts"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.document_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
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
                        <Image
                            source={icons.setting_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
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

export default Tabs;