import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";


const GoHomeButton = ({onGoHome}) => {
    const navigation = useNavigation()
    const goHome = () => {
        onGoHome()
        navigation.navigate('Main')
    }
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={goHome}>
            <Text style={styles.buttonText}>
                Go back
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(28, 149, 214, 0.8)',
        width: 120
    },
    buttonText: {
        color: '#000',
        fontSize: 25,
        fontWeight: '500'
    }
})
export default GoHomeButton
