import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, StatusBar, Text} from "react-native";
import Header from "../../components/Header";
import BottomPanel from "../../components/BottomPanel";
import {TasksContainer} from "./categories/Task/TasksContainer";
import PanelContainer from "./panel/PanelContainer";
import {NotesContainer} from "./categories/Note/NotesContainer";
import SupportColumnElement from "./SupportColumnElement";

const sortCategoriesByType = (arr, visibleTasksType) => {
    const tasksArr = []
    const notesArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === 'tasks' && visibleTasksType === 'uncompleted' && arr[i].allTasksNumber === arr[i].completedTasksNumber) continue
        if (arr[i].type === 'tasks' && visibleTasksType === 'completed' && arr[i].allTasksNumber === arr[i].uncompletedTasksNumber) continue
        arr[i].type === 'tasks' ? tasksArr.push(arr[i]) : notesArr.push(arr[i])
    }
    return [tasksArr, notesArr]
}
const getLeftRightTasksColumn = (arr) => {
    const leftTasksColumnArr = [arr[0]]
    const rightTasksColumnArr = []

    let leftMicrotasksCounter = arr[0].allTasksNumber
    let rightMicrotasksCounter = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === null) continue
        if (leftMicrotasksCounter >= rightMicrotasksCounter) {
            rightTasksColumnArr.push(arr[i])
            rightMicrotasksCounter += arr[i].allTasksNumber
        } else {
            leftTasksColumnArr.push(arr[i])
            leftMicrotasksCounter += arr[i].allTasksNumber
        }
    }
    const leftTaskColumn = leftTasksColumnArr
        .map(category => <TasksContainer
            key={category.name}
            name={category.name}
            backgroundColor={category.color}
        />)
    const rightTasksColumn = rightTasksColumnArr
        .map(category => <TasksContainer
            key={category.name}
            name={category.name}
            backgroundColor={category.color}
        />)
    return [leftTaskColumn, rightTasksColumn]
}

const MainScreen = ({categoriesList, visibleTasksType}) => {

    const [leftColumnH, setLeftColumnHeight] = useState(0)
    const [rightColumnH, setRightColumnHeight] = useState(0)
    const [difference, setDifference] = useState(0)
    const [tasksTypeArr, notesTypeArr] = sortCategoriesByType(categoriesList, visibleTasksType)
    const [leftTaskColumn, rightTasksColumn] = tasksTypeArr.length > 0 ? getLeftRightTasksColumn(tasksTypeArr) : [[], []]
    const bottomNotesColumn = notesTypeArr
        .map(noteElement => <NotesContainer
            key={noteElement.name}
            name={noteElement.name}
            backgroundColor={noteElement.color}
        />)

    return (
        <View style={styles.container}>
            <StatusBar/>
            <ScrollView style={{width: '100%'}} vertical>
                <Header title={`My${'\n'}Notes`}/>
                <PanelContainer/>
                <View style={styles.row}>
                    <View style={styles.leftColumnWrapper}>
                        <View onLayout={(event) => {
                            setLeftColumnHeight(event.nativeEvent.layout.height)
                            setDifference(Math.abs(event.nativeEvent.layout.height - rightColumnH) - 5)
                        }}
                              style={styles.leftColumn}>
                            {leftTaskColumn}
                        </View>
                        {leftColumnH < rightColumnH ? <SupportColumnElement height={difference}/> : null}
                    </View>
                    <View style={styles.rightColumnWrapper}>
                        <View onLayout={(event) => {
                            setRightColumnHeight(event.nativeEvent.layout.height)
                            setDifference(Math.abs(leftColumnH - event.nativeEvent.layout.height) - 5)
                        }}
                              style={styles.rightColumn}>
                            {rightTasksColumn}
                        </View>
                        {leftColumnH > rightColumnH ? <SupportColumnElement height={difference}/> : null}
                    </View>
                </View>
                {bottomNotesColumn}
            </ScrollView>
            <BottomPanel/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        gap: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftColumnWrapper: {
        width: '49%'
    },
    rightColumnWrapper: {
        width: '49%'
    },
    leftColumn: {
        width: '100%'
    },
    rightColumn: {
        width: '100%'
    },
})

export default MainScreen;
