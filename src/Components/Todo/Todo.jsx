import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import List from '../List/List';
import './Todo.css'
const Todo = () => {
    return (
        <div className='todo'>
            <Form />
            <List />
            <Footer />
        </div>
    );
};

export default Todo;