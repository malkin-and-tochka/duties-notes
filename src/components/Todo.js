import {Text, View} from "react-native";
import {useState} from "react";


const Todo = () => {
    const [listOfItems, setListOfItems] = useState([
        {text: 'all', index: '0'},
        {text: 'important', index: '2'},
        {text: 'To-do', index: '3'}
    ])

    const list = listOfItems.map(
        item =>
            <TaskWrapper
                key={item.index}
                children={
                    <Text
                        key={item.index}
                        style={styles.text}>
                        {item.text.toUpperCase()}
                    </Text>
                }/>
    )

    return (
        <View style={[styles.main, styles.row]}>
            {list}
        </View>
    )
}

const TaskWrapper = ({children}) => {
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    )
}

const styles = {
    main: {
        color: '#fff',
        alignItems: 'center',
        height: 100
    },
    text: {
        color: '#4C4C4C',
        fontSize: 20,
    },
    wrapper: {
        borderWidth: 3,
        borderColor: '#4C4C4C',
        borderRadius: 50,
        padding: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 5,
        width: '100%'
    }
}

export default Todo