import { useDispatch, useSelector } from "react-redux";
import { LuListPlus } from "react-icons/lu";
import { HiOutlineSave } from "react-icons/hi";
import "./Form.css";
import { addTodoItemAction, editingAction, inputValueAction, selectEditText, selectText } from "../../Store/store";
import { useRef } from "react";
const Form = () => {
    const text = useSelector(selectText)
    const editText = useSelector(selectEditText)
    const dispatch = useDispatch();
    const inputRef = useRef(null)

    
    const handlerClick = (e) => {
        e.preventDefault()
        if(editText) {
            return dispatch(editingAction())
        }
        if(text.trim()) {
            dispatch(addTodoItemAction())
        }
    }

    if (editText && inputRef.current) {
        inputRef.current.focus();
    }

    return (
        <div className="form-wrapper">
            <h1>TodoList</h1>
            <form className="form" onSubmit={handlerClick}>
                <div className="input-container">
                    <input
                        ref={inputRef}
                        className="todoinput"
                        placeholder="add-new-todo press + Enter"
                        value={text}
                        onChange={(e) =>
                            dispatch(inputValueAction(e.target.value))
                        }
                        type="text"
                    />
                    {editText ? (
                    <i onClick={handlerClick}><HiOutlineSave className="iconsadd" /></i>
                    ) : (
                    <i onClick={handlerClick}><LuListPlus className="iconsadd" /></i>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Form;
