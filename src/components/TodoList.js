import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/actions/todolist';

const TodoList = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todolist.todos);

    useEffect(() => {
        dispatch(getTodos([{
            content: 'deneme ilk ohalooo',
            priotry: 'High',
        }]))
    }, []);
    return (
        <div>
            <h1 style={{marginTop: 20}}>Todo List</h1>
            {/* { todos will be here...} */}
        </div>
    )
}

export default TodoList;