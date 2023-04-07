import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window")

export const COLORS_Light = {
    //base color
    primary: "#75A7F7", // main blue
    lightBlue: "#D2E0EE",
    
    pink: "#F7759C",
    green: "#30a04b",
    repeat1: 0.5, // For gradient
    pink2: "#FF6BA1",
    repeat2: 0.96,
    angle: 269.39,
    yellow: "#FAE297",
    white: "#FFFFFF",

    //colors:
    background: "#FFFFFF", //white
    background_constrast: "#1E1F20", //black

    lightConstrast: "#9A9B9E",
    lightConstrast2: "#F7F7F9",
    lightConstrast3: "#767272",
    lightConstrast4: "#EAEAEA",

    transparent: "transparent"
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 16,


    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 12,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    label: 12,

    // app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.largeTitle, lineHeight: 60 },
    h1: { fontFamily: "SourceSansPro-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "SourceSansPro-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "SourceSansPro-Bold", fontSize: SIZES.h3, lineHeight: 30 },
    h4: { fontFamily: "SourceSansPro-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "SourceSansPro-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "SourceSansPro-regular", fontSize: SIZES.body5, lineHeight: 22 },
}

const appTheme  = { COLORS_Light, SIZES, FONTS };

export default appTheme;