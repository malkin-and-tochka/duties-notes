import {View, StyleSheet, Text, TextInput, ScrollView, SafeAreaView} from "react-native";
import BottomPanel from "../../components/BottomPanel";
import {useState} from "react";
import TaskToView from "./TaskToView";

const TaskInformation = ({backgroundColor, tasksList, categoryName, type, notes, editTask}) => {
    const modifiedCategoryName = categoryName.split(/(?=[A-Z])/).join(' ')
    let tasksListToView
    if (tasksList) {
        tasksListToView = tasksList
            .map(task => <TaskToView
                key={task.id}
                backgroundColor={backgroundColor}
                task={task}
                editTask={editTask}
                categoryName={categoryName}/>
            )
    }
    const onChange = (newText) => {
        editTask(0, categoryName, newText, 'notes')
    }
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Text style={styles.title}>
                {modifiedCategoryName}
            </Text>
            <Text style={styles.opacityHelp}>
                Tap to edit
            </Text>
            <Text style={styles.yourList}>
                Your list:
            </Text>
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} style={styles.inputWrapper}>
                {type === 'tasks' ?
                    tasksListToView
                    :
                    <TextInput
                        editable
                        multiline
                        autoCapitalize={'sentences'}
                        value={notes}
                        cursorColor={'#000'}
                        selectionColor={backgroundColor}
                        onChangeText={text => onChange(text)}
                        style={styles.textInput}
                    />}
            </ScrollView>
            <BottomPanel/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        padding: 15
    },
    title: {
        color: '#000',
        fontSize: 50,
        width: '60%'
    },
    opacityHelp: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'flex-end',
        marginRight: 20
    },
    yourList: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 10,
        borderRadius: 10,
        fontSize: 25,
        fontWeight: '500',
        alignSelf: 'flex-start',
        marginRight: 20
    },
    inputWrapper: {
        width: '100%',
        display: 'flex',
        marginTop: 10
    },
    textInput: {
        width: '90%',
        padding: 10,
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10
    }
})

export default TaskInformation;
