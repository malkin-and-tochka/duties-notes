import {View, StyleSheet, ScrollView, Text} from "react-native";

const Panel = () => {
    return (
        <ScrollView horizontal style={styles.row}>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.text}>ALL</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    row: {
        rowGap: 20
    },
    panel: {
        borderWidth: 2,
        borderColor: '#FDFDFD',
        borderRadius: 30,
    },
    text: {
        color: '#FDFDFD',
        padding: 10,
        fontSize: 20
    }
})

export default Panel;
