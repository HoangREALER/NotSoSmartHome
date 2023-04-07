import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS_Light, SIZES, FONTS, icons } from '../../constants';

import { rooms } from '../../controller/data/rooms';
import { device } from '../../controller/data/devices';

const HomeBody = () => {

    const [selectedRoom, setSelectedRoom] = React.useState(rooms[0])
    const [devicesState, setDevices] = React.useState(device)

    const onSelectRoom = (room) => {
        let deviceList = device.filter(a => a.room_id === room.id)

        setDevices(deviceList)
        setSelectedRoom(room)
    }

    const RenderRoomList = (props) => {
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
        )
    }

    const RenderRoomDevice = (props) => {
        const renderDevice = ({ item }) => {
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
                        color: (selectedRoom.id === item.room_id ? COLORS_Light.background_constrast : COLORS_Light.lightConstrast)
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={device}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderDevice}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    return (
        <>
            <RenderRoomList />
            <RenderRoomDevice />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding,
        paddingHorizontal: SIZES.padding2 * 3
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
})

export {
    HomeBody
};