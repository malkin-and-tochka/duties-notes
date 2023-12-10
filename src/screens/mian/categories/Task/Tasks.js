import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import TwoLines from "../../../../components/reused/TwoLines";
import MicroTasks from "./MicroTasks";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const Tasks = ({categoryName, tasksList, toggleTaskState, backgroundColor, type, visibleTasksType}) => {
    const navigation = useNavigation()
    const modifiedName = categoryName.split(/(?=[A-Z])/).join(' ')
    const filteredTasksList = tasksList.filter(task => {
        switch (visibleTasksType) {
            case 'completed':
                return task.isExecute === true
            case 'uncompleted':
                return task.isExecute === false
            default:
                return true
        }
    })

    if (filteredTasksList.length === 0) {
        return null
    }

    const onPress = () => {
        navigation.navigate('TaskInformation', {name: categoryName, backgroundColor: backgroundColor})
    }
    const listOfTasks = filteredTasksList
        .map(task =>
            <MicroTasks
                isExecute={task.isExecute}
                toggleTaskState={toggleTaskState}
                key={task.id}
                id={task.id}
                task={task.text}
                parentName={categoryName}
            />
        )

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.wrapper, {
                backgroundColor: backgroundColor,
                borderRadius: 50
            }]}>
            <TwoLines/>
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>{modifiedName}</Text>
                {listOfTasks}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: '500',
        width: '90%'
    },
    wrapper: {
        width: '100%',
        padding: 10,
        paddingBottom: 20,
        marginBottom: 5
    }
})

export default Tasks;
