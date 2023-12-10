import {
    getAllTasksAmount,
    getCompletedTasksAmount,
    getUnCompletedTasksAmount
} from "../../../store/selectors/selectors";
import {connect} from "react-redux";
import Panel from "./Panel";
import {changeVisibleTasksType} from "../../../store/redux/tasksCategoriesReducer";

const mapStateToProps = state => {
    return {
        allTasksAmount: getAllTasksAmount(state),
        completedTasksAmount: getCompletedTasksAmount(state),
        uncompletedTasksAmount: getUnCompletedTasksAmount(state)
    }
}

const PanelContainer = connect(mapStateToProps,{
    changeVisibleTasksType
})(Panel)
export default PanelContainer
