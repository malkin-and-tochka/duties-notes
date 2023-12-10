import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";


const CategoryButton = ({categoryName, backgroundColor}) => {
    const navigation = useNavigation()
    const splitName = categoryName.split(/(?=[A-Z])/).join(' ')
    const onPressGoToEditor = () => {
        navigation.navigate('TaskInformation', {name: categoryName, backgroundColor: backgroundColor})
    }
    return (
        <TouchableOpacity onPress={onPressGoToEditor} style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Text style={styles.text }>{splitName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 55,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    text: {
        color: '#000',
        fontSize: 28,
        fontWeight: '500'
    }
})

export default CategoryButton;
