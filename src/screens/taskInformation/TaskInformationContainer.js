import {connect} from "react-redux";
import TaskInformation from "./TaskInformation";
import {getNotes, selectTasksByName, typeOfCategory} from "../../store/selectors/selectors";
import {editTask} from "../../store/redux/tasksCategoriesReducer";


const mapStateToProps = (state, props) => {
    const categoryType = typeOfCategory(state.tasksCategories, props.route.params.name)
    if (categoryType === 'tasks') {
        return {
            ...props.route.params,
            tasksList: selectTasksByName(state.tasksCategories, props.route.params.name),
            categoryName: props.route.params.name,
            type: categoryType
        }
    } else {
        return {
            ...props.route.params,
            type: categoryType,
            categoryName: props.route.params.name,
            notes: getNotes(state.tasksCategories, props.route.params.name)
        }
    }
}

const TaskInformationContainer = connect(mapStateToProps, {
    editTask
})(TaskInformation)
export default TaskInformationContainer
