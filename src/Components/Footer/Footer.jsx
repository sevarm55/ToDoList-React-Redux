import { useDispatch, useSelector } from "react-redux";
import { deleteAll, selectCompleteCount, selectTodos } from "../../Store/store";

import "./Footer.css";

const Footer = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch()
    const completedCoutn = useSelector(selectCompleteCount)

    return (
        <div className="todo-footer">
            <button onClick={() => dispatch(deleteAll())}  class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front ">
                Delete Completed
            </span>
            </button>
            <p className="comp">{completedCoutn} / {todos.length}</p>
        </div>
    );
};

export default Footer;