import {connect} from "react-redux";
import NewCategory from "./NewCategory";
import {addNoteCategory, addTaskCategory} from "../../store/redux/tasksCategoriesReducer";

const mapStateToProps = state => {
    return {}
}

const NewCategoryContainer = connect(mapStateToProps, {
    addTaskCategory,
    addNoteCategory
})(NewCategory)
export default NewCategoryContainer
