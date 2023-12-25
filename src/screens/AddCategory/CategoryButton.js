import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";


const CategoryButton = ({categoryName, backgroundColor, onPress}) => {
    const splitName = categoryName.split(/(?=[A-Z])/).join(' ')
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: backgroundColor}]}>
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
