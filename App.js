import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";
import {Provider} from "react-redux";
import {store} from "./src/store/redux/store";
import MainScreenContainer from "./src/screens/mian/MainScreenContainer";
import EditOrAddCategoryContainer from "./src/screens/editOrAddCategory/EditOrAddCategoryContainer";
import TaskInformationContainer from "./src/screens/taskInformation/TaskInformationContainer";
import NewCategory from "./src/screens/newCategory/NewCategory";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer style={styles.container}>
                <Stack.Navigator initialRouteName='NewCategory' screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Main" component={MainScreenContainer}/>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                    <Stack.Screen name="EditOrAddCategory" component={EditOrAddCategoryContainer}/>
                    <Stack.Screen name="TaskInformation" component={TaskInformationContainer}/>
                    <Stack.Screen name="NewCategory" component={NewCategory}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        top: 50,
        paddingLeft: 10,
        paddingTop: 10
    },
    text: {
        color: '#FDFDFD',
        fontSize: 50
    }
});
