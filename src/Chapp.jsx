import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"

import { v4 as uuidv4 } from 'uuid';

export default function App() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    // useEffect(() => {
    //   let todoString = localStorage.getItem('todos')

    //   if (todoString) {
    //     let todos = JSON.parse(localStorage.getItem('todos'))
    //     setTodos(todos)
    //   }
    // }, [])


    useEffect(() => {
        let todoString = localStorage.getItem('todos');

        if (todoString) {
            let todos = JSON.parse(todoString);
            setTodos(todos);
        }
    }, []);


    const saveToLS = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos || []));
    };



    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id);
        setTodo(t[0].todo);
        let newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
        saveToLS(newTodos); // Save modified todos to local storage
    };

    const handleAdd = () => {
        const newTodo = { id: uuidv4(), todo, isCompleted: false };
        setTodos([...todos, newTodo]);
        setTodo("");
        saveToLS([...todos, newTodo]); // Save updated todos to local storage
    };

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
        saveToLS();
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => item.id === id);
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        saveToLS();
    }



    return (
        <>
            <Navbar />
            <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-200 min-h-[80vh]">
                <div className="addtodo">
                    <h2 className="text-lg font-bold my-3"> Add a todo </h2>
                    <input onChange={handleChange} value={todo} type="text" className="w-1/2 mx-3 rounded-md outline-none p-1 " />
                    <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-900 p-2 py-1 text-sm font-bold  text-white rounded-md mx-6">Add</button>
                </div>
                <h2 className="text-lg font-bold my-3">Your Todos</h2>

                {todos.length == 0 && <h1 className="m-7">No todos</h1>}
                <div className="todos">

                    {todos.map(item => {
                        return (

                            <div key={item.id} className="todo flex w-fit justify-between gap-96 my-3">

                                <div className="itext flex gap-12">
                                    <input type="checkbox" name={item.id} onChange={handleCheckbox} value={item.isCompleted} id="" />
                                    <div className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
                                </div>

                                <div className="buttons grid grid-cols-2 gap-1">
                                    <button
                                        onClick={(e) => { handleEdit(e, item.id) }}
                                        className="bg-blue-600 hover:bg-blue-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 mb-2 sm:mb-0"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => { handleDelete(e, item.id) }}
                                        className="bg-blue-600 hover:bg-blue-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 mb-2 sm:mb-0"
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

