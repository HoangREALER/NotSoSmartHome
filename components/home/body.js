import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, Switch } from 'react-native';
import MaskedView from "@react-native-community/masked-view";
import { COLORS_Light, SIZES, FONTS, icons } from '../../constants';

import { rooms } from '../../controller/data/rooms';
import { device } from '../../controller/data/devices';
import Slider from '@react-native-community/slider';
import MarqueeText from 'react-native-marquee';

const HomeBody = () => {



    const RenderRoomList = (props) => {
        const [selectedRoom, setSelectedRoom] = React.useState(rooms[0])
        const [devicesState, setDevices] = React.useState(device.filter(a => a.room_id === 0))

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
                                        thumbColor={COLORS_Light.white}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop: SIZES.padding * 2, }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", flex: 1 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ ...FONTS.h5, marginRight: SIZES.padding }}>Colour</Text>
                                        <View style={{
                                            width: 36,
                                            height: 30,
                                            borderRadius: 32,
                                            backgroundColor: "#FAE297"
                                        }}></View>
                                    </View>
                                    <View style={{
                                        paddingHorizontal: SIZES.padding2,
                                        justifyContent: 'center',
                                        height: 30,
                                        borderRadius: 32,
                                        backgroundColor: COLORS_Light.lightConstrast2
                                    }}>
                                        <Text style={{ ...FONTS.h5 }}>{rooms[item.room_id].name}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }

                const AirCondtionComponent = ({ item }) => {
                    const iconSize = 48;
                    const [isEnabled, setIsEnabled] = useState(false);
                    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
                    const [temperature, setTemperature] = useState(item.rpm);

                    const onValueChange = value => {
                        setTemperature(value);
                    }

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
                                                        source={icons.conditioner}
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
                                        thumbColor={COLORS_Light.white}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                            <View>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={18}
                                    maximumValue={30}
                                    minimumTrackTintColor={COLORS_Light.primary}
                                    maximumTrackTintColor={COLORS_Light.lightConstrast}
                                    thumbTintColor={COLORS_Light.primary}
                                    step={1}
                                    value={temperature}
                                    onValueChange={onValueChange}
                                />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", flex: 1 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: SIZES.padding / 2 }}>
                                        <View style={{
                                            width: 30,
                                            height: 30,
                                        }}>
                                            <MaskedView
                                                style={styles.maskedView}
                                                maskElement={
                                                    <View style={styles.maskWrapper}>
                                                        <Image
                                                            source={icons.temp}
                                                            resizeMode="contain"
                                                            style={{
                                                                height: 30,
                                                            }}
                                                        />
                                                    </View>
                                                }
                                            >
                                                <View style={{ ...styles.mask, backgroundColor: COLORS_Light.lightConstrast }}></View>
                                            </MaskedView>
                                        </View>
                                        <Text style={{ ...FONTS.h5, color: COLORS_Light.primary }}>{temperature} ᵒC</Text>

                                    </View>

                                    <View style={{
                                        paddingHorizontal: SIZES.padding2,
                                        justifyContent: 'center',
                                        height: 30,
                                        borderRadius: 32,
                                        backgroundColor: COLORS_Light.lightConstrast2
                                    }}>
                                        <Text style={{ ...FONTS.h5 }}>{rooms[item.room_id].name}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }

                const MusicPlayerComponent = ({ item }) => {
                    const iconSize = 48;
                    const [isEnabled, setIsEnabled] = useState(false);
                    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
                    const duration = item.duration
                    const progressInterval = useRef(null);
                    const [playing, setPlaying] = useState(true);
                    const [progress, setProgress] = useState(0)

                    const onValueChange = value => {
                        setProgress(value);
                    }

                    function format(seconds) {
                        let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
                        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
                        return `${mins}:${secs}`;
                    }

                    function play() {
                        setPlaying(true);
                    }

                    function pause() {
                        setPlaying(false);
                    }

                    function handlePlayButton() {
                        if (playing) {
                            pause()
                        } else {
                            play()
                        }
                    }

                    useEffect(() => {
                        return () => {
                            clearInterval(progressInterval); //when user exits, clear this interval.
                        };
                    }, []);

                    useEffect(() => {
                        if (progress >= duration) {
                            setProgress(duration);
                            clearInterval(progressInterval);
                        }
                    }, [progress]);

                    useEffect(() => {
                        if (playing) {
                            progressInterval.current = setInterval(
                                () => setProgress((old) => old + 1),
                                1000
                            );
                        } else {
                            clearInterval(progressInterval.current);
                            progressInterval.current = null;
                        }
                    }, [playing]);

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
                                                        source={icons.music}
                                                        resizeMode="contain"
                                                        style={{
                                                            width: 25,
                                                            height: 25,
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
                                        thumbColor={COLORS_Light.white}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>


                            <View style={{ paddingTop: SIZES.padding * 2 }}>
                                <Text style={{ ...FONTS.h4 }}>{item.song}</Text>
                                <Text style={{ ...FONTS.h5 }}>{item.artist}</Text>
                            </View>

                            <View>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={duration}
                                    minimumTrackTintColor={COLORS_Light.primary}
                                    maximumTrackTintColor={COLORS_Light.lightConstrast}
                                    thumbTintColor={COLORS_Light.primary}
                                    step={1}
                                    value={progress}
                                    onValueChange={onValueChange}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', paddingBottom: SIZES.padding }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", flex: 1 }}>
                                    <View style={{
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ ...FONTS.h5 }}>{format(progress)}</Text>
                                    </View>


                                    <View style={{
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ ...FONTS.h5 }}>{format(duration)}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", flex: 1 }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        gap: SIZES.padding
                                    }}>
                                        <TouchableOpacity style={{
                                            width: 30,
                                            height: 30,
                                        }}>
                                            <MaskedView
                                                style={styles.maskedView}
                                                maskElement={
                                                    <View style={styles.maskWrapper}>
                                                        <Image
                                                            source={icons.forward}
                                                            resizeMode="contain"
                                                            style={{
                                                                height: 30,
                                                                transform: "rotate(180deg)"
                                                            }}
                                                        />
                                                    </View>
                                                }
                                            >
                                                <View style={{ ...styles.mask, backgroundColor: COLORS_Light.lightConstrast }}></View>
                                            </MaskedView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                            onPress={() => handlePlayButton()}>
                                            <MaskedView
                                                style={styles.maskedView}
                                                maskElement={
                                                    <View style={styles.maskWrapper}>
                                                        <Image
                                                            source={playing ? icons.pause : icons.play}
                                                            resizeMode="contain"
                                                            style={{
                                                                height: 30,
                                                            }}
                                                        />
                                                    </View>
                                                }
                                            >
                                                <View style={{ ...styles.mask, backgroundColor: COLORS_Light.lightConstrast }}></View>
                                            </MaskedView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            width: 30,
                                            height: 30,
                                        }}>
                                            <MaskedView
                                                style={styles.maskedView}
                                                maskElement={
                                                    <View style={styles.maskWrapper}>
                                                        <Image
                                                            source={icons.forward}
                                                            resizeMode="contain"
                                                            style={{
                                                                height: 30,
                                                            }}
                                                        />
                                                    </View>
                                                }
                                            >
                                                <View style={{ ...styles.mask, backgroundColor: COLORS_Light.lightConstrast }}></View>
                                            </MaskedView>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{
                                        paddingHorizontal: SIZES.padding2,
                                        justifyContent: 'center',
                                        height: 30,
                                        borderRadius: 32,
                                        backgroundColor: COLORS_Light.lightConstrast2
                                    }}>
                                        <Text style={{ ...FONTS.h5 }}>{rooms[item.room_id].name}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }

                const typ = {
                    0: LampComponent,
                    1: AirCondtionComponent,
                    2: MusicPlayerComponent
                }
                const DeviceType = typ[props.item.type]

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
                        <DeviceType item={props.item} />
                    </TouchableOpacity>
                )
            }

            return (
                <View style={styles.container2}>
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
        <View style={{ paddingBottom: SIZES.padding * 4 }}>
            <RenderRoomList />
        </View>
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
    slider: {
        height: 40,
    },
})

export {
    HomeBody
};