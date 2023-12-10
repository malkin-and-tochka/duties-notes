import {View, TouchableOpacity, StyleSheet, Text} from "react-native";
import BlurBG from "../../../../components/reused/BlurBG";

const MicroTasks = ({style, task, toggleTaskState, isExecute, id, parentName}) => {
    const onClick = () => toggleTaskState(id, parentName)

    const newTask = task.length > 10 ? task.slice(0, 9) + '...' : task

    return (
        <TouchableOpacity style={styles.wrapper} onPress={onClick}>
            <BlurBG style={{padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
                <View style={styles.row}>
                    <View style={[styles.bigCircle, style]}>
                        {
                            isExecute ?
                                <View style={styles.smallCircle}/>
                                : null
                        }
                    </View>
                    <Text style={[styles.text, isExecute ? styles.textCrossOut : null]}>{newTask}</Text>
                </View>
            </BlurBG>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    bigCircle: {
        height: 26,
        width: 26,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCircle: {
        height: 16,
        width: 16,
        borderRadius: 50,
        backgroundColor: '#000'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        width: '100%'
    },
    textCrossOut: {
        textDecorationLine: 'line-through',
        opacity: 0.5
    }
})

export default MicroTasks
