import {ScrollView, StatusBar, StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import Header from "../../components/Header";
import React, {useState} from "react";


const NewCategory = () => {
    const [radioCategory, setRadioCategory] = useState('tasks')
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const setRadioTasks = () => setRadioCategory('tasks')
    const setRadioNotes = () => setRadioCategory('notes')
    return (
        <View style={styles.container}>
            <StatusBar/>
            <ScrollView vertical>
                <Header title={'Add what\n' + 'you want'}/>
                <View style={styles.highWrapper}>
                    <View style={[styles.colorWrapper, {backgroundColor: '#F7D14C'}]}>
                        <Text style={styles.text}>
                            Choose Type
                        </Text>
                    </View>
                    <TouchableOpacity onPress={setRadioTasks} style={styles.row}>
                        <View
                            style={[styles.square, {backgroundColor: radioCategory === 'tasks' ? '#F7D14C' : '#fff'}]}></View>
                        <Text style={styles.subText}>List of tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setRadioNotes} style={styles.row}>
                        <View
                            style={[styles.square, {backgroundColor: radioCategory === 'notes' ? '#F7D14C' : '#fff'}]}></View>
                        <Text style={styles.subText}>Notes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.highWrapper}>
                    <View style={[styles.colorWrapper, {backgroundColor: '#EB7A53'}]}>
                        <Text style={styles.text}>
                            Name it
                        </Text>
                    </View>
                    <TextInput value={name} onChangeText={setName} placeholder={'Type block name'}
                               style={styles.nameInput}/>
                </View>
                <View style={styles.highWrapper}>
                    <View style={[styles.colorWrapper, {backgroundColor: '#F7D14C'}]}>
                        <Text style={styles.text}>
                            Choose Color
                        </Text>
                    </View>
                </View>
                <View style={styles.highWrapper}>
                    <View style={[styles.colorWrapper, {backgroundColor: '#F6ECC9'}]}>
                        <Text style={styles.text}>
                            Or take it from following
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setColor('#EB7A53')}
                                          style={[styles.bigSquare, {backgroundColor: '#EB7A53'}]}></TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('#F7D14C')}
                                          style={[styles.bigSquare, {backgroundColor: '#F7D14C'}]}></TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('#F6ECC9')}
                                          style={[styles.bigSquare, {backgroundColor: '#F6ECC9'}]}></TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('#98B7DB')}
                                          style={[styles.bigSquare, {backgroundColor: '#98B7DB'}]}></TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('#A8D672')}
                                          style={[styles.bigSquare, {backgroundColor: '#A8D672'}]}></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.completeButton}>
                        <Text style={styles.buttonText}>
                            Complete
                        </Text>
                    </TouchableOpacity>
                    <Text style={{color: '#fff', fontSize: 26, marginLeft: 10}}>{'<-'} If you are ready</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        width: '100%'
    },
    highWrapper: {
        marginBottom: 40
    },
    colorWrapper: {
        width: '70%',
        justifyContent: "center",
        borderRadius: 5,
    },
    text: {
        fontSize: 32,
        alignItems: "center",
        fontWeight: '500',
        marginLeft: 20
    },
    subText: {
        fontSize: 20,
        alignItems: "center",
        fontWeight: '500',
        marginLeft: 20,
        color: '#fff'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        marginTop: 20
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#fff'
    },
    bigSquare: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    nameInput: {
        height: 30,
        fontSize: 24,
        backgroundColor: '#fff',
        width: '60%',
        marginTop: 20,
        paddingLeft: 5
    },
    completeButton: {
        backgroundColor: '#A8D672',
        height: 40,
        width: 150,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: '#000',
        fontSize: 26,
        fontWeight: '500'
    }
})
export default NewCategory;
