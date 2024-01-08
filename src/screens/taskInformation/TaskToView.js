import {Text, TextInput, View, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import {useState} from "react";


const TaskToView = ({task, backgroundColor, editTask, categoryName}) => {
    const onChange = newText => editTask(task.id, categoryName, newText, 'tasks');
    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={styles.inputWrapper}>
                <View style={styles.row}>
                    <TextInput
                        editable
                        autoCapitalize={'sentences'}
                        cursorColor={'#000'}
                        selectionColor={backgroundColor}
                        defaultValue={task.text}
                        onChangeText={text => onChange(text)}
                        style={styles.textInput}
                        placeholder={'New task'}
                    />
                    <View style={[styles.textProcessWrapper]}>
                        <Text style={[styles.textProcess]}>
                            {task.isExecute ? 'Done' : 'In process'}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        marginTop: 10,
    },
    textInput: {
        width: '50%',
        padding: 10,
        marginLeft: 20,
        fontSize: 22,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    row: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    textProcessWrapper: {
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(34, 183, 41, 0.8)'
    },
    textProcess: {
        fontSize: 22,
        fontWeight: '500'
    }
})

export default TaskToView;
