import {View, StyleSheet} from "react-native";

const BlurBG = ({children, style}) => {
    return (
        <View style={[styles.blur, style]}>
                {children}
        </View>
    )
}

const styles = StyleSheet.create({
    blur: {
        backgroundColor: 'rgba(0, 0, 0,0.15)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default BlurBG
