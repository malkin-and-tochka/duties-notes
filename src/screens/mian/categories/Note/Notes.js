import {StyleSheet, Text, View} from "react-native";
import TwoLines from "../../../components/reused/TwoLines";
import {useState} from "react";

const Note = ({categoryName, backgroundColor, notes, style}) => {
    const [size, setSize] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const modifiedName = categoryName.split(/(?=[A-Z])/).join(' ')
    let note = notes
    if (notes.length > 40) {
        note = note.slice(0, 40)
        note += '...'
    }
    return (
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={[styles.wrapper, style, {
                backgroundColor: backgroundColor,
                height: 200 + size,
                width: 350 + size,
                transform: [ {translateY: -size}],
            }]}>
                <TwoLines setSize={setSize} setOpacity={setOpacity} opacity={opacity} categoryName={categoryName}
                          backgroundColor={backgroundColor}/>
                <View style={{marginTop: 20}}>
                    <Text style={styles.text}>{modifiedName}</Text>
                    <Text style={styles.note}>{note}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6ECC9',
        padding: 20,
        borderRadius: 50,
        width: '100%',
        marginTop: 20,
        marginBottom: 20
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

export default Note;
