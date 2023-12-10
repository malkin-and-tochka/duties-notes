import {StyleSheet, View} from "react-native";

const TwoLines = () => {
    return (
        <View
            style={styles.wrapper}>
            <View style={[styles.line, {width: 36}]}>
            </View>
            <View style={[styles.line, {width: 16}]}>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    line: {
        height: 3,
        backgroundColor: '#000',
        borderRadius: 5,
        alignSelf: "center",
        opacity: 0.5,
    },
    wrapper: {
        position: "absolute",
        top: 8,
        alignSelf: "center",
        gap: 1,
        padding: 5,
        paddingHorizontal: 10,
        zIndex: 5,
        width: '70%',
        borderRadius: 5
    }
});

export default TwoLines;
