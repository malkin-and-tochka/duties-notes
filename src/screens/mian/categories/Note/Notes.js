import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import TwoLines from "../../../../components/reused/TwoLines";
import {useNavigation} from "@react-navigation/native";

const Notes = ({categoryName, notes, backgroundColor}) => {
    const navigation = useNavigation()
    const modifiedName = categoryName.split(/(?=[A-Z])/).join(' ')
    let note = notes
    if (notes.length > 40) {
        note = note.slice(0, 40)
        note += '...'
    }
    const onPress = () => {
        navigation.navigate('TaskInformation', {name: categoryName, backgroundColor: backgroundColor})
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, {backgroundColor: backgroundColor}]}>
            <TwoLines/>
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>{modifiedName}</Text>
                <Text style={styles.note}>{note}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderRadius: 50,
        width: '100%',
        marginBottom: 5
    },
    text: {
        fontSize: 30,
        fontWeight: '500'
    },
    note: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        paddingLeft: 10
    }
})

export default Notes;
