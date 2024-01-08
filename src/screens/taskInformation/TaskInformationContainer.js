import {connect} from "react-redux";
import TaskInformation from "./TaskInformation";
import {getNotes, selectTasksByName, typeOfCategory} from "../../store/selectors/selectors";
import {addTaskToCategory, editTask, filterTasksListByEmpty} from "../../store/redux/tasksCategoriesReducer";
import {getTheCategoriesName} from "../../components/reused/functions";


const mapStateToProps = (state, props) => {
    const categoryName = getTheCategoriesName(props.route.params.name)
    const categoryType = typeOfCategory(state.tasksCategories, categoryName)
    if (categoryType === 'tasks') {
        return {
            ...props.route.params,
            tasksList: selectTasksByName(state.tasksCategories, categoryName),
            categoryName: props.route.params.name,
            type: categoryType
        }
    } else {
        return {
            ...props.route.params,
            type: categoryType,
            categoryName: props.route.params.name,
            notes: getNotes(state.tasksCategories, categoryName)
        }
    }
}

const TaskInformationContainer = connect(mapStateToProps, {
    editTask,
    addTaskToCategory,
    filterTasksListByEmpty
})(TaskInformation)
export default TaskInformationContainer
