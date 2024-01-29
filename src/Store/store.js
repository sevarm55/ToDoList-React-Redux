import { createStore } from "redux";

const store = createStore(
    (state, action) => {
        switch (action.type) {
            case "toggleText":
                return {
                    ...state,
                    text: action.payload,
                };
            case "addtodoitem":
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        {
                            id: new Date().getTime().toString(),
                            title: state.text,
                            isCompleted: false,
                            backgroundColor: `rgb(${
                                Math.floor(Math.random() * 156) + 100
                            }, ${Math.floor(Math.random() * 156) + 100}, ${
                                Math.floor(Math.random() * 156) + 100
                            })`,
                        },
                    ],
                    text: "",
                };
            case "deleteTodoItem":
                return {
                    ...state,
                    todos: state.todos.filter((el) => el.id !== action.payload)
                };
            case "checkTodoItem" :
                return {
                    ...state,
                    todos: state.todos.map((el) => el.id === action.payload ? {...el,isCompleted:!el.isCompleted} : el)
                }
            case "editTodo" :
                return {
                    ...state,
                    editText: action.payload,
                    text: action.payload.title,
                }
            case "editTodoUpdate" :
                return {
                    ...state,
                    todos: state.todos.map((el) => el.id === state.editText.id ? {...el, title:state.text} : el),
                    editText:null,
                    text: ""
                }
            case "deleteAll":
                return {
                    ...state,
                    todos: state.todos.filter((el) =>  !el.isCompleted),
                    CompletedCount: 0,
                }
            case "checkTodoItemLength" :
                return {
                    ...state,
                    CompletedCount: state.todos.filter((el) => el.isCompleted).length
                }
            default:
                return state;
        }
    },
    {
        text: "",
        todos: [],
        editText: null,
        CompletedCount: 0,
    }
);

export const selectTodos = (state) => state.todos;
export const selectCompleteCount = state => state.CompletedCount
export const selectText = (state) => state.text;
export const selectEditText = state => state.editText
export const inputValueAction = (payload) => ({ type: "toggleText", payload });
export const addTodoItemAction = (payload) => ({type: "addtodoitem",payload,});
export const deleteTodoItemAction = (payload) => ({type: "deleteTodoItem",payload,});
export const checkTodoItemAction = (payload) => ({type: "checkTodoItem",payload})
export const editAction = (payload) => ({type: "editTodo",payload})
export const editingAction = (payload) => ({type: "editTodoUpdate",payload})
export const deleteAll = (payload) => ({type: "deleteAll",payload})
export const checktodoCoutnAction = payload => ({type: "checkTodoItemLength", payload})





export default store;
