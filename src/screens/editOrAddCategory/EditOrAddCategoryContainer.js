import {getNamesAndTypeOfCategories} from "../../store/selectors/selectors";
import {connect} from "react-redux";
import EditOrAddCategory from "./EditOrAddCategory";

const mapStateToProps = state => {
    return {
        categoriesList: getNamesAndTypeOfCategories(state)
    }
}

const EditOrAddCategoryContainer = connect(mapStateToProps, {})(EditOrAddCategory)
export default EditOrAddCategoryContainer
