import {getNamesAndTypeOfCategories} from "../../store/selectors/selectors";
import {connect} from "react-redux";
import AddCategory from "./AddCategory";

const mapStateToProps = state => {
    return {
        categoriesList: getNamesAndTypeOfCategories(state)
    }
}

const AddCategoryContainer = connect(mapStateToProps, {})(AddCategory)
export default AddCategoryContainer
