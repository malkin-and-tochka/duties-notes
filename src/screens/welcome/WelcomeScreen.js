import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";


const WelcomeScreen = () => {
    const text = 'Go to the...'
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    const navigation = useNavigation()

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeOut = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevState => prevState + 1)
            }, 200 / text.length)

            return () => clearTimeout(timeOut)
        }
    }, [currentIndex, currentText])

    const goToTheMainPage = () => navigation.navigate('Main')

    return (
        <TouchableWithoutFeedback onPress={goToTheMainPage} style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>{currentText}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6ECC9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        maxWidth: '90%',
        textAlign: 'center'
    }
})

export default WelcomeScreen