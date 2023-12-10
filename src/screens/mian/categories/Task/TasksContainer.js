import {connect} from "react-redux";
import {addTasksCategory} from "../../../../store/redux/tasksCategoriesReducer";
import {getVisibleTasksType, selectTasksByName, typeOfCategory} from "../../../../store/selectors/selectors";
import {toggleTaskState} from "../../../../store/redux/tasksCategoriesReducer";
import Tasks from "./Tasks";

const mapStateToProps = (state, props) => {
    return {
        tasksList: selectTasksByName(state.tasksCategories, props.name),
        categoryName: props.name,
        type: typeOfCategory(state.tasksCategories, props.name),
        visibleTasksType: getVisibleTasksType(state)
    }
}

export const TasksContainer = connect(mapStateToProps, {
    addTasksCategory,
    toggleTaskState
})(Tasks)
