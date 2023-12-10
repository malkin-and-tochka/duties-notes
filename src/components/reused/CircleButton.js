import {StyleSheet, TouchableHighlight} from "react-native";
import {useNavigation} from "@react-navigation/native";


const CircleButton = ({children, styles}) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('EditOrAddCategory')
    }
    return (
        <TouchableHighlight onPress={onPress} style={[styles, buttonStyles.circleButton]}>
            {children}
        </TouchableHighlight>
    )
}

const buttonStyles = StyleSheet.create({
    circleButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    }
})

export default CircleButton
