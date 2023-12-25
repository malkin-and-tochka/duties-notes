import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import Header from "../../components/Header";
import BottomPanel from "../../components/BottomPanel";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import CategoryButton from "./CategoryButton";

const getRandomColor = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const colorizeText = (inputText) => {
    const colorsArray = ['#EB7A53', '#F7D14C', '#F6ECC9', '#98B7DB', '#A8D672']

    return inputText.split('').map((char, index) => {
        const randomIndex = Math.random()
        if (randomIndex > 0.3 || char === char.toUpperCase()) {
            const randColor = getRandomColor(colorsArray)
            return (
                <Text key={index} style={[styles.text, {color: randColor}]}>
                    {char}
                </Text>
            );
        } else {
            return char;
        }
    });
}

const AddCategory = ({categoriesList}) => {
    const navigation = useNavigation()
    const goBack = () => navigation.navigate('Main')
    const colorizedText = colorizeText('Edit exist\ncategories:')
    const colorizedText1 = colorizeText('Or create\n' + 'a NEW category:')

    const onPressGoToEditor = () => {
        navigation.navigate('NewCategory')
    }
    const existCategoriesList = categoriesList
        .map((category, index) => {
                const onPress = () => {
                    navigation.navigate('TaskInformation', {name: category.name, backgroundColor: category.color})
                }
                return <CategoryButton
                    key={index}
                    categoryName={category.name}
                    backgroundColor={category.color}
                    onPress={onPress}
                />
            }
        )

    return (
        <View style={styles.container}>
            <StatusBar/>
            <SafeAreaView>
                <ScrollView vertical>
                    <Header title={'Add what\n' + 'you want'}/>
                    <Text style={[styles.text, {color: '#fff'}]}>{colorizedText}</Text>
                    {existCategoriesList}
                    <Text style={[styles.text, {color: '#fff'}]}>{colorizedText1}</Text>
                    <CategoryButton onPress={onPressGoToEditor} categoryName={'New Category'}
                                    backgroundColor={'#F6ECC9'}/>
                    <Button onPress={goBack} title={'go back'}></Button>
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
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 32,
        marginBottom: 20
    }
})

export default AddCategory;
