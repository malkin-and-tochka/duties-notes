import {getNamesOfCategories} from "../../store/selectors/selectors";
import {connect} from "react-redux";
import MainScreen from "../../screens/MainScreen";


const mapStateToProps = (state) => {
    return {
        categoriesList: getNamesOfCategories(state)
    }
}

const MainScreenContainer = connect(mapStateToProps)(MainScreen)
export default MainScreenContainer
