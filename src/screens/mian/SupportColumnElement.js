import {Text, View, StyleSheet} from "react-native";

const SupportColumnElement = ({height}) => {
    return (
        <View style={[styles.wrapper, {height}]}>
            <Text style={styles.text}>
                support column element
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 40,
        backgroundColor: '#4101F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default SupportColumnElement;
