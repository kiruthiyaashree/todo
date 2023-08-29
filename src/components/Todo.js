import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import React from 'react';
import '../App.css';
 function Todo()
{
    const [value,setValue]=React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const [newItem,setNewItem]=React.useState("");
    const [todos,setTodos]=React.useState([]);
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        setNewItem("");
        setTodos(currentTodos =>{
            return [
                ...currentTodos,
                {
                    id:crypto.randomUUID(),title:newItem,completed:false,
                }
            ]
        })
    }
    function toggleTodo(id,completed)
    {
        setTodos(currentTodos =>
            {
                return currentTodos.map(todo=>
                    {
                        if(todo.id === id)
                        {
                            return {...todo,completed}
                        }
                        return todo
                    })
            })
    }
    function deleteTodo(id)
    {
        setTodos(currentTodos=>{
            return currentTodos.filter(todo=>todo.id!==id)
        })
    }
    return (
        <div className='flex items-center justify-center font-poppins'>
        <div className="m-[5%] h-[40rem] w-[100%] border bg-gradient-to-br from-pink-300 to-blue-400/70 shadow-2xl rounded-2xl p-5">
            <div className="grid grid-cols-[1fr_5fr]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DateCalendar  />
            </LocalizationProvider>
            <div className=''>
                    <TabContext value={value}>
                        <Box >
                            <TabList onChange={handleChange}>
                                <Tab label="Todo" value="1"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='flex flex-col items-start'>
                        <form className='' onSubmit={handleSubmit} >
                            <input type="text" id="item" autoComplete='off' value={newItem}  onChange={(e)=>setNewItem(e.target.value)} className='border-b-2 border-gray-500 font-poppins outline-none bg-inherit mr-3'/>
                                <button className='border border-cyan-950 px-2  rounded-md'>+</button>
                            </form>
                            <br/>
                            <div className=''>
                                <h1>Todo List</h1>
                                    <ul className='grid grid-cols-[repeat(6,1fr)] gap-2 overflow-y-scroll scrollbar-hidden h-[25em]'>
                                    
                                    {
                                        todos.map((todo)=>
                                        {
                                             return <li className='font-poppins border w-min bg-white rounded-lg shadow-md p-3 m-2 h-min flex justify-between todo-item ' key={todo.id}>
                                                <label className='flex items-center w-[25] overflow-hidden'>
                                                    <input type='checkbox' className='mx-2' checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.checked)}/>{todo.title}
                                                </label>
                                                <button className='mx-2' onClick={()=>deleteTodo(todo.id)}>
                                                    <CloseSharpIcon/>
                                                </button>
                                            </li>
                                        })
                                    }
                                    </ul>
                                </div>
                        </TabPanel>
                    </TabContext>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Todo;