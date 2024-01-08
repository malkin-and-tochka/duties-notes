import {getTheCategoriesName} from "../../components/reused/functions";

const ADD_TASK_CATEGORY = 'ADD-TASKS-CATEGORY'
const ADD_NOTE_CATEGORY = 'ADD-NOTES-CATEGORY'
const REMOVE_TASKS_CATEGORY = 'REMOVE-TASKS-CATEGORY'
const ADD_TASK_TO_CATEGORY = 'ADD-TASK-TO-CATEGORY'
const REMOVE_TASK_FROM_CATEGORY = 'REMOVE-TASK-FROM-CATEGORY'
const TOGGLE_TASK_STATE = 'TOGGLE-TASK-STATE'
const EDIT_TASK = 'EDIT-TASK'
const CHANGE_VISIBLE_TASKS_TYPE = 'CHANGE-VISIBLE-TASKS-TYPE'
const FILTER_TASKS_LIST_BY_EMPTY_TASKS = 'FILTER-TASKS-LIST-BY-EMPTY-TASKS'

const initialState = {
    categories: {
        'PlanForTheDay': {
            tasks: [
                {id: 0, text: 'first task', isExecute: false}
            ],
            type: 'tasks',
            allTasksNumber: 1,
            completedTasksNumber: 0,
            outstandingTasksNumber: 1,
            color: '#EB7A53'
        },
        'MyLectures': {
            tasks: [
                {id: 0, text: 'first lecture', isExecute: false}
            ],
            type: 'tasks',
            allTasksNumber: 1,
            completedTasksNumber: 0,
            outstandingTasksNumber: 1,
            color: '#F7D14C'
        },
        "MyNotes": {
            type: 'notes',
            note: 'Hello)\n' +
                'I\'m here with today\'s late phrasal verb)\n' +
                '\n' +
                '"Get rid of"\n' +
                '\n' +
                'Do you have any of bad habits?)\n' +
                'Do you smoke or procrastinate?)\n' +
                'Do you want to change something?)\n' +
                'To do this you need to get rid of this habits)',
            color: '#F6ECC9'
        },
        'ShoppingList': {
            tasks: [
                {id: 0, text: 'first position', isExecute: false}
            ],
            type: 'tasks',
            allTasksNumber: 1,
            completedTasksNumber: 0,
            outstandingTasksNumber: 1,
            color: '#A8D672'
        },
        'PlanForTheWeek': {
            tasks: [
                {id: 0, text: 'first position', isExecute: false},
                {id: 1, text: 'second position', isExecute: false},
                {id: 2, text: 'third position', isExecute: false}
            ],
            type: 'tasks',
            allTasksNumber: 3,
            completedTasksNumber: 0,
            outstandingTasksNumber: 3,
            color: '#98B7DB'
        },
    },
    visibleTasksType: 'all'
}

export const taskCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_CATEGORY:
            const newTaskCategoryName = getTheCategoriesName(action.categoryName)
            const newTaskCategory = {
                tasks: [],
                allTasksNumber: 0,
                completedTasksNumber: 0,
                outstandingTasksNumber: 0,
                type: 'tasks',
                color: action.color
            }
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [newTaskCategoryName]: newTaskCategory
                }
            }
        case ADD_NOTE_CATEGORY:
            const newNoteCategoryName = getTheCategoriesName(action.categoryName)
            const newNoteCategory = {
                note: 'Your note',
                type: 'notes',
                color: action.color
            }
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [newNoteCategoryName]: newNoteCategory
                }
            }
        case
        REMOVE_TASKS_CATEGORY:
            //?????????????
            const newState = state.categories
            const name = action.name
            delete newState[name]
            return {
                ...state,
                categories: newState
            }
        case
        EDIT_TASK: {
            const editedName = getTheCategoriesName(action.categoryName)
            let newState = state.categories
            if (action.categoryType === 'notes') {
                newState[editedName].note = action.newText
            } else {
                newState[editedName].tasks[action.id].text = action.newText
            }
            return {...state, categories: newState}
        }
        case
        ADD_TASK_TO_CATEGORY: {
            const newAddState = state.categories
            const editedName = getTheCategoriesName(action.categoryName)
            const newTask = {id: newAddState[editedName].tasks.length, text: '', isExecute: false}
            newAddState[editedName].tasks = [...newAddState[editedName].tasks, newTask]
            return {
                ...state,
                categories: newAddState
            }
        }
        case
        FILTER_TASKS_LIST_BY_EMPTY_TASKS: {
            const newFilterState = state.categories
            const editedName = getTheCategoriesName(action.categoryName)
            newFilterState[editedName].tasks = newFilterState[editedName].tasks.filter(task => task.text !== '')
            for (let i = 0; i < newFilterState[editedName].tasks.length; i++) {
                newFilterState[editedName].tasks[i].id = i
            }
            return {
                ...state,
                categories: newFilterState
            }
        }
        case
        REMOVE_TASK_FROM_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.name === action.name) {
                        category.tasks.filter(task => task.name !== action.taskName)
                    }
                })
            }
        case
        TOGGLE_TASK_STATE:
            const arr = state.categories[action.name].tasks.map((task =>
                (task.id === action.id)
                    ? {...task, isExecute: !task.isExecute}
                    : task))
            const newToggleCategories = state.categories
            newToggleCategories[action.name].tasks = arr
            if (newToggleCategories[action.name].tasks[action.id].isExecute === true) {
                newToggleCategories[action.name].completedTasksNumber += 1
                newToggleCategories[action.name].outstandingTasksNumber -= 1
            } else {
                newToggleCategories[action.name].completedTasksNumber -= 1
                newToggleCategories[action.name].outstandingTasksNumber += 1
            }
            return {
                ...state,
                categories: newToggleCategories
            }
        case CHANGE_VISIBLE_TASKS_TYPE:
            return {
                ...state,
                visibleTasksType: action.visibleTasksType
            }
        default:
            return state
    }
}

export const addTaskCategory = (categoryName, color) => ({
    type: ADD_TASK_CATEGORY,
    categoryName,
    color
})
export const addNoteCategory = (categoryName, color) => ({
    type: ADD_NOTE_CATEGORY,
    categoryName,
    color
})
export const toggleTaskState = (id, name) => ({type: TOGGLE_TASK_STATE, name, id})
export const addTaskToCategory = (categoryName) => ({type: ADD_TASK_TO_CATEGORY, categoryName})
export const filterTasksListByEmpty = (categoryName) => ({type: FILTER_TASKS_LIST_BY_EMPTY_TASKS, categoryName})
export const editTask = (id, categoryName, newText, categoryType) => ({
    type: EDIT_TASK,
    categoryName,
    id,
    newText,
    categoryType
})
export const changeVisibleTasksType = visibleTasksType => ({type: CHANGE_VISIBLE_TASKS_TYPE, visibleTasksType})
