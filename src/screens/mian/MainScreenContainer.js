import {getNamesAndTypeOfCategories, getVisibleTasksType} from "../../store/selectors/selectors";
import {connect} from "react-redux";
import MainScreen from "./MainScreen";


const mapStateToProps = (state) => {
    return {
        categoriesList: getNamesAndTypeOfCategories(state),
        visibleTasksType: getVisibleTasksType(state)
    }
}

const MainScreenContainer = connect(mapStateToProps)(MainScreen)
export default MainScreenContainer
