import {connect} from "react-redux";
import {getNotes, typeOfCategory} from "../../../../store/selectors/selectors";
import {toggleTaskState} from "../../../../store/redux/tasksCategoriesReducer";
import Notes from "./Notes";

const mapStateToProps = (state, props) => {
    return {
        type: typeOfCategory(state.tasksCategories, props.name),
        categoryName: props.name,
        backgroundColor: props.backgroundColor,
        notes: getNotes(state.tasksCategories, props.name)
    }
}

export const NotesContainer = connect(mapStateToProps, {
    toggleTaskState
})(Notes)
