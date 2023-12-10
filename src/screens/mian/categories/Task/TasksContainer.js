import {connect} from "react-redux";
import {addTasksCategory} from "../../../store/redux/tasksCategoriesReducer";
import {getNotes, getVisibleTasksType, selectTasksByName, typeOfCategory} from "../../../store/selectors/selectors";
import {toggleTaskState} from "../../../store/redux/tasksCategoriesReducer";
import TypeDeterminant from "./TypeDeterminant";

const mapStateToProps = (state, props) => {
    const categoryType = typeOfCategory(state.tasksCategories, props.name)
    if (categoryType === 'tasks') {
        return {
            tasksList: selectTasksByName(state.tasksCategories, props.name),
            categoryName: props.name,
            type: categoryType,
            visibleTasksType: getVisibleTasksType(state)
        }
    } else {
        return {
            type: categoryType,
            categoryName: props.name,
            notes: getNotes(state.tasksCategories, props.name)
        }
    }
}

export const TasksNotesCategoryContainer = connect(mapStateToProps, {
    addTasksCategory,
    toggleTaskState
})(TypeDeterminant)
