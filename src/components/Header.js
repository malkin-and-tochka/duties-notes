import {StyleSheet, Text, SafeAreaView} from "react-native";


const Header = ({title}) => {
    return(
        <SafeAreaView style={styles.main}>
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        marginBottom: 30
    },
    text: {
        color: '#FDFDFD',
        fontSize: 50,
    }
})

export default Header
