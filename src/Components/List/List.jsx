import { useDispatch, useSelector } from "react-redux";

import { VscTrash } from "react-icons/vsc";
import { MdOutlineModeEditOutline } from "react-icons/md";

import {
    checkTodoItemAction,
    checktodoCoutnAction,
    deleteTodoItemAction,
    editAction,
    selectTodos,
} from "../../Store/store";

import "./List.css";

const List = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    return (
        <div className="todo-list">
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <div
                            className="todo-list-item"
                            onClick={() =>{
                                dispatch(checkTodoItemAction(todo.id))
                                dispatch(checktodoCoutnAction())
                            }}
                            style={{
                                backgroundColor: todo.backgroundColor,
                                opacity: todo.isCompleted ? "0.4" : "1",
                            }}>
                            <div
                                className="check"
                                style={{
                                    backgroundImage: todo.isCompleted
                                        ? "url(https://cdn-icons-png.flaticon.com/512/5610/5610944.png)"
                                        : "none",
                                    backgroundSize: todo.isCompleted
                                        ? "23px"
                                        : "none",
                                    backgroundRepeat: todo.isCompleted
                                        ? "no-repeat"
                                        : "repeat",
                                }}>
                            </div>
                            <div className="todoitembox">
                                <p>{todo.title}</p>
                            </div>
                            <div className="todo-list-btn">
                                <i
                                    className="editt"
                                    onClick={(e) => {
                                        dispatch(editAction(todo));
                                        e.stopPropagation();
                                    }}>
                                    <MdOutlineModeEditOutline />
                                </i>
                                <i
                                    onClick={() =>
                                        dispatch(deleteTodoItemAction(todo.id))
                                    }>
                                    <VscTrash />
                                </i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
