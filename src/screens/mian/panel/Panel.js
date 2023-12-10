import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";

const Panel = ({allTasksAmount, completedTasksAmount, uncompletedTasksAmount, changeVisibleTasksType}) => {
    return (
        <ScrollView  delayPressIn={ 100 } horizontal style={styles.row} >
            <TouchableOpacity onPress={()=>{changeVisibleTasksType('all')}} style={styles.panel}>
                <Text style={styles.text}>
                    ALL
                </Text>
                <View style={styles.smallCircle}>
                    <Text style={{fontSize: 12, color: '#FDFDFD'}}>
                        {allTasksAmount}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{changeVisibleTasksType('completed')}} style={styles.panel}>
                <Text style={styles.text}>
                    Completed
                </Text>
                <View style={styles.smallCircle}>
                    <Text style={{fontSize: 12, color: '#FDFDFD'}}>
                        {completedTasksAmount}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{changeVisibleTasksType('uncompleted')}} style={styles.panel}>
                <Text style={styles.text}>
                    Uncompleted
                </Text>
                <View style={styles.smallCircle}>
                    <Text style={{fontSize: 12, color: '#FDFDFD'}}>
                        {uncompletedTasksAmount}
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    row: {
        marginBottom: 20
    },
    panel: {
        borderWidth: 2,
        borderColor: '#FDFDFD',
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        gap: 5,
        marginRight: 5
    },
    text: {
        color: '#FDFDFD',
        fontSize: 20
    },
    smallCircle: {
        backgroundColor: '#262626',
        width: 25,
        height: 25,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Panel;
