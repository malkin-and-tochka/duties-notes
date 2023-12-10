const ADD_TASKS_CATEGORY = 'ADD-TASKS-CATEGORY'
const REMOVE_TASKS_CATEGORY = 'REMOVE-TASKS-CATEGORY'
const ADD_TASK_TO_CATEGORY = 'ADD-TASK-TO-CATEGORY'
const REMOVE_TASK_FROM_CATEGORY = 'REMOVE-TASK-FROM-CATEGORY'
const TOGGLE_TASK_STATE = 'TOGGLE-TASK-STATE'

const getTheCategoriesName = str => {
    const words = str.split(' ');

    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join('');
}

const initialState = {
    categories: {
        'PlanForThaDay': {
            tasks: [
                {id: 0, text: 'first task', isExecute: false},
                {id: 1, text: 'second task', isExecute: false},
                {id: 2, text: 'third task', isExecute: false}
            ],
            allTasksNumber: 0,
            completedTasksNumber: 0,
            outstandingTasksNumber: 0
        },
        'MyLectures': {
            tasks: [
                {id: 0, text: 'first lecture', isExecute: false},
                {id: 1, text: 'second lecture', isExecute: false},
                {id: 2, text: 'third lecture', isExecute: false}
            ],
            allTasksNumber: 0,
            completedTasksNumber: 0,
            outstandingTasksNumber: 0
        },
        'ShoppingList': {
            tasks: [
                {id: 0, text: 'first position', isExecute: false},
                {id: 1, text: 'second position', isExecute: false},
                {id: 2, text: 'third position', isExecute: false}
            ],
            allTasksNumber: 0,
            completedTasksNumber: 0,
            outstandingTasksNumber: 0
        }
    }
}

//,
//         {
//             name: 'PlanForThaDay',
//             tasks: [
//                 {id: 0, text: 'first task', isExecute: false},
//                 {id: 1, text: 'second task', isExecute: false},
//                 {id: 2, text: 'third task', isExecute: false}
//             ],
//             allTasksNumber: 0,
//             completedTasksNumber: 0,
//             outstandingTasksNumber: 0
//         },
//         {
//             name: 'MyLectures',
//             tasks: [
//                 {id: 0, text: 'first lecture', isExecute: false},
//                 {id: 1, text: 'second lecture', isExecute: false},
//                 {id: 2, text: 'third lecture', isExecute: false}
//             ],
//             allTasksNumber: 0,
//             completedTasksNumber: 0,
//             outstandingTasksNumber: 0
//         },
//         {
//             name: 'ShoppingList',
//             tasks: [
//                 {id: 0, text: 'first position', isExecute: false},
//                 {id: 1, text: 'second position', isExecute: false},
//                 {id: 2, text: 'third position', isExecute: false}
//             ],
//             allTasksNumber: 0,
//             completedTasksNumber: 0,
//             outstandingTasksNumber: 0
//         },


export const taskCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASKS_CATEGORY:
            const newCategory = {
                name: getTheCategoriesName(action.categoryName),
                tasks: [],
                allTasksNumber: 0,
                completedTasksNumber: 0,
                outstandingTasksNumber: 0

            }
            const newCategoryName = getTheCategoriesName(action.categoryName)
            return {
                categories: {
                    ...state.categories,
                    [newCategoryName]: newCategory
                }
            }
        case REMOVE_TASKS_CATEGORY:
            //?????????????
            const newState = state.categories
            const name = action.name
            delete newState[name]
            return {
                categories: newState
            }
        case ADD_TASK_TO_CATEGORY:
            const newAddState = state.categories
            newAddState[action.name].tasks = [...newAddState[action.name].tasks, action.task]
            return {
                categories: newAddState
                // state.categories.map(category => {
                //     if (category.name === action.name) {
                //         category.tasks = [...category.tasks, action.task]
                //         category.allTasksNumber = category.allTasksNumber + 1
                //         category.outstandingTasksNumber = category.outstandingTasksNumber + 1
                //     }
                // })
            }
        case REMOVE_TASK_FROM_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.name === action.name) {
                        category.tasks.filter(task => task.name !== action.taskName)
                    }
                })
            }
        case TOGGLE_TASK_STATE:
            let catPosition
            for (let i = 0; i < state.categories.length; i++) {
                if (state.categories[i].name === action.name) catPosition = i
            }
            const arr = state.categories[catPosition].tasks.map((task =>
                (task.id === action.id)
                    ? {...task, isExecute: !task.isExecute}
                    : task))
            const obj = {
                ...state.categories[catPosition],
                tasks: arr
            }
            return {
                ...state,
                categories: [
                    ...state.categories.filter(category => category.name !== action.name),
                    obj
                ]
            }
        default:
            return state
    }
}

export const addTasksCategory = categoryName => ({type: ADD_TASKS_CATEGORY, categoryName})
export const toggleTaskState = (id, name) => ({type: TOGGLE_TASK_STATE, name, id})
