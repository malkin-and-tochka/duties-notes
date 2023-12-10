import {Text, View, StyleSheet} from "react-native";
import TwoLines from "../../../../components/reused/TwoLines";
import MicroTasks from "../MicroTasks";
import {useState} from "react";

const TasksCategory = ({
                           categoryName,
                           tasksList,
                           toggleTaskState,
                           backgroundColor,
                           style,
                           type,
                           orientation,
                           visibleTasksType
                       }) => {

    const [opacity, setOpacity] = useState(0)

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
    const listOfTasks = filteredTasksList
        .map(task =>
            <MicroTasks
                isExecute={task.isExecute}
                toggleTaskState={toggleTaskState}
                key={task.id}
                id={task.id}
                task={task.text}
                parentName={categoryName}
            />)

    return (
        <View
            style={[styles.wrapper, {
                backgroundColor: backgroundColor,
                borderRadius: 50
            }]}>
            <TwoLines backgroundColor={backgroundColor} categoryName={categoryName} opacity={opacity}
                      setOpacity={setOpacity}/>
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>{modifiedName}</Text>
                {listOfTasks}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: '500'
    },
    wrapper: {
        width: 180,
        padding: 10,
        margin: 50
    }
})

export default TasksCategory;
