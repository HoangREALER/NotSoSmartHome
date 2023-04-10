import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, Switch } from 'react-native';
import MaskedView from "@react-native-community/masked-view";
import { COLORS_Light, SIZES, FONTS, icons } from '../../constants';

import { rooms } from '../../controller/data/rooms';
import { device } from '../../controller/data/devices';

const HomeBody = () => {



    const RenderRoomList = (props) => {
        const [selectedRoom, setSelectedRoom] = React.useState(rooms[0])
        const [devicesState, setDevices] = React.useState(device)
    
        const onSelectRoom = (room) => {
            let deviceList = device.filter(a => a.room_id === room.id)
    
            setDevices(deviceList)
            setSelectedRoom(room)
        }
        const RenderRoomDevice = (props) => {

            const RenderDevice = (props) => {
                const LampComponent = ({ item }) => {
                    const iconSize = 48;
                    const [isEnabled, setIsEnabled] = useState(false);
                    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    
                    return (
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                                    <View
                                        style={{
                                            padding: SIZES.padding,
                                            width: iconSize,
                                            height: iconSize,
                                            borderRadius: iconSize / 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: SIZES.padding,
                                            backgroundColor: COLORS_Light.lightBlue
                                        }}
                                    >
                                        <MaskedView
                                            style={styles.maskedView}
                                            maskElement={
                                                <View style={styles.maskWrapper}>
                                                    <Image
                                                        source={icons.lamp}
                                                        resizeMode="contain"
                                                        style={{
                                                            width: 33,
                                                            height: 33,
                                                        }}
                                                    />
                                                </View>
                                            }
                                        >
                                            <View style={{ ...styles.mask, backgroundColor: COLORS_Light.primary }}></View>
                                        </MaskedView>
                                    </View>
    
                                    <View style={{ width: 0, flexGrow: 0.5 }}>
                                        <Text style={{ ...FONTS.h5, flexWrap: "wrap" }}>{item.name}</Text>
                                    </View>
    
                                </View>
    
                                <View>
                                    <Switch
                                        trackColor={{ true: COLORS_Light.primary }}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
    
                            <View style={{ flexDirection: 'row', paddingTop: SIZES.padding * 2, }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-start", flex: 1 }}>
    
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ ...FONTS.h5, marginRight: SIZES.padding }}>Colour</Text>
                                        <View style={{
                                            width: 36,
                                            height: 30,
                                            borderRadius: 32,
                                            backgroundColor: "#FAE297"
                                        }}></View>
                                    </View>
    
                                </View>
                            </View>
                        </View>
                    )
                }
    
                return (
                    <TouchableOpacity
                        style={{
                            padding: 24,
                            backgroundColor: COLORS_Light.background,
                            borderRadius: SIZES.radius,
                            width: "100%",
                            flexDirection: "column",
                            marginBottom: SIZES.padding * 3,
                            ...styles.shadow
                        }}
                    >
                        <LampComponent item={props.item} />
                    </TouchableOpacity>
                )
            }
    
            return (
                <View style={styles.container2}>
                    {/* <FlatList
                        data={device}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderDevice}
                        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                    /> */}
                    {devicesState.map(item => <RenderDevice key={item.id} item={item} />)}
                </View>
            )
        }
        const renderRoomItem = ({ item }) => {
            if (item.id === 0) {
                return (
                    <TouchableOpacity
                        style={{
                            padding: SIZES.padding2,
                            backgroundColor: COLORS_Light.background,
                            borderRadius: SIZES.radius,
                            marginRight: SIZES.padding,
                            ...styles.shadow
                        }}
                        onPress={() => onSelectRoom(item)}
                    >
                        <Text style={{
                            ...FONTS.h4,
                            color: (selectedRoom.id === item.id ? COLORS_Light.background_constrast : COLORS_Light.lightConstrast)
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )
            }
            else {
                return (
                    <TouchableOpacity
                        style={{
                            padding: SIZES.padding2,
                            backgroundColor: COLORS_Light.background,
                            borderRadius: SIZES.radius,
                            marginRight: SIZES.padding,
                            ...styles.shadow
                        }}
                        onPress={() => onSelectRoom(item)}
                    >
                        <Text style={{
                            ...FONTS.h4,
                            color: (selectedRoom.id === item.id ? COLORS_Light.background_constrast : COLORS_Light.lightConstrast)
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )
            }
        }

        return (
            <>
                <View style={styles.container}>
                    <FlatList
                        data={rooms}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderRoomItem}
                        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                    />
                    
                </View>
                <RenderRoomDevice />
            </>
        )
    }

    

    return (
        <>
            <RenderRoomList />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding,
        paddingHorizontal: SIZES.padding2 * 3
    },
    container2: {
        display: "flex",
        paddingHorizontal: SIZES.padding * 3,
        paddingVertical: SIZES.padding2,
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
    },
})

export {
    HomeBody
};