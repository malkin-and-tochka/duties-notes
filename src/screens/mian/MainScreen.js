import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, StatusBar} from "react-native";
import Header from "../components/Header";
import BottomPanel from "../components/BottomPanel";
import {TasksCategoryContainer} from "../components/containers/TasksCategoryContainer";

const MainScreen = ({categoriesList}) => {
    const categoriesListToView = categoriesList.map(name => <TasksCategoryContainer key={name} name={name}/>)
    return (
        <View style={styles.container}>
            <StatusBar/>
            <SafeAreaView>
                <ScrollView
                    vertical
                >
                    <Header/>
                    <View style={styles.row}>
                    </View>
                    {categoriesListToView}
                </ScrollView>
            </SafeAreaView>
            <BottomPanel/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10,
        gap: 5
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})

export default MainScreen;
