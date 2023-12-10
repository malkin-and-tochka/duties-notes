import {createSelector} from "reselect";

export const selectCategories = state => state.categories

export const getSelectCategoryByName = (state, name) => {
    const selectCategoryByName = createSelector([selectCategories], categories => {
        return categories[name]
    })
    return selectCategoryByName(state)
}

export const selectTasksByName = (state, name) => {
    const category = getSelectCategoryByName(state, name)
    return category.tasks
}
export const typeOfCategory = (state, name) => {
    const category = getSelectCategoryByName(state, name)
    return category.type
}

export const getNotes = (state, name) => {
    const category = getSelectCategoryByName(state, name)
    return category.note
}

export const getNamesAndTypeOfCategories = (state) => {
    const keys = [];
    for (let key in state.tasksCategories.categories) {
        const currentCategory = state.tasksCategories.categories[key]
        currentCategory.type === 'tasks' ?
        keys.push({
            name: key,
            uncompletedTasksNumber: currentCategory.outstandingTasksNumber,
            completedTasksNumber: currentCategory.completedTasksNumber,
            color: currentCategory.color,
            type: currentCategory.type,
            allTasksNumber: currentCategory.allTasksNumber
        })
            :
            keys.push({
                name: key,
                color: currentCategory.color,
                type: currentCategory.type,
                note: currentCategory.note
            })
    }
    return keys
}
export const getNamesOfCategories = (state) => {
    const keys = [];
    for (let key in state.tasksCategories.categories) {
        keys.push(key)
    }
    return keys
}
export const getAllTasksAmount = (state) => {
    const categories = state.tasksCategories.categories
    let categoriesCount = 0
    for (const property in categories) {
        if (categories[property].type === 'tasks') {
            categoriesCount += categories[property].allTasksNumber
        }
    }
    return categoriesCount
}
export const getCompletedTasksAmount = (state) => {
    const categories = state.tasksCategories.categories
    let categoriesCount = 0
    for (const property in categories) {
        if (categories[property].type === 'tasks') {
            categoriesCount += categories[property].completedTasksNumber
        }
    }
    return categoriesCount
}
export const getUnCompletedTasksAmount = (state) => {
    const categories = state.tasksCategories.categories
    let categoriesCount = 0
    for (const property in categories) {
        if (categories[property].type === 'tasks') {
            categoriesCount += categories[property].outstandingTasksNumber
        }
    }
    return categoriesCount
}
export const getVisibleTasksType = (state) => {
    return state.tasksCategories.visibleTasksType
}
