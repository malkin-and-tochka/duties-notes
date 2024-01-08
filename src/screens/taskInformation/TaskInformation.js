import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import BottomPanel from "../../components/BottomPanel";
import TaskToView from "./TaskToView";
import {useEffect} from "react";
import GoHomeButton from "../../components/reused/GoHomeButton";


const TaskInformation = ({
                             backgroundColor,
                             tasksList,
                             categoryName,
                             type,
                             notes,
                             addTaskToCategory,
                             editTask,
                             filterTasksListByEmpty,
                             navigation
                         }) => {
    useEffect(() => {
        return navigation.addListener('blur', () => filterTasksListByEmpty(categoryName))
    }, [])
    const modifiedCategoryName = categoryName.split(/(?=[A-Z])/).join(' ')
    let tasksListToView
    if (tasksList) {
        tasksListToView = tasksList
            .map(task => <TaskToView
                id={task.id}
                key={task.id}
                backgroundColor={backgroundColor}
                task={task}
                editTask={editTask}
                categoryName={categoryName}/>)
    }
    const onChange = (newText) => {
        editTask(0, categoryName, newText, 'notes')
    }
    const addTaskOnPress = () => {
        addTaskToCategory(categoryName)
    }
    const goHomeContainer = type ==='tasks' ? () => filterTasksListByEmpty(categoryName) : () => {}
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
            <View>

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
            </View>
            {type === 'tasks' ?
                <TouchableOpacity onPress={addTaskOnPress} style={styles.addTaskToListWrapper}>
                    <Text style={styles.addTaskToListText}>Add task</Text>
                </TouchableOpacity>
                :
                null}
            <GoHomeButton onGoHome={goHomeContainer}/>
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
        marginTop: 10
    },
    textInput: {
        width: '90%',
        padding: 10,
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10
    },
    addTaskToListWrapper: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(28, 149, 214, 0.8)'
    },
    addTaskToListText: {
        fontSize: 20,
        fontWeight: '500'
    }
})

export default TaskInformation;
