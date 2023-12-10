import {Text, TextInput, View, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import {useState} from "react";


const TaskToView = ({task, backgroundColor, editTask, categoryName}) => {
    const onChange = newText => {
        editTask(task.id, categoryName, newText, 'tasks');
    }
    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={styles.inputWrapper}>
                <Text style={{fontSize: 25, fontWeight: '500'}}>
                    {task.id + 1}:{'\n'}
                </Text>
                <View style={styles.row}>
                    <TextInput
                        editable
                        autoCapitalize={'sentences'}
                        cursorColor={'#000'}
                        selectionColor={backgroundColor}
                        defaultValue={task.text}
                        onChangeText={text => onChange(text)}
                        style={styles.textInput}/>
                    <Text
                        style={[styles.textProcess, {backgroundColor: task.isExecute ? '#E3FFC1' : '#FFD9D9'}]}>
                        {task.isExecute ? 'Done' : 'In process'}
                    </Text>
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
        width: '60%',
        padding: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: '100%'
    },
    textProcess: {
        fontSize: 20,
        fontWeight: '500',
        marginRight: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 10,
        borderRadius: 10
    }
})

export default TaskToView;
