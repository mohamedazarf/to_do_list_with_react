// // import react from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // const Home= ()=>{
// //     return(
// //         <header>
// //             <h1>My home</h1>
// // <Router>
// //             <nav>
// //                 <ul>
// //                 <Link to="/home">Home</Link>
// //                 <Link to="/my-notes">my notes</Link>
// //                     <li>Contact</li>
// //                 </ul>
// //             </nav>
// //     <Routes>
// //     <Route exact path="/home" element={<Home/>} />
// //        <Route exact path="/my-notes" element={<MyNotes/>} />
// //     </Routes>
// // </Router>
// //         </header>
// //     )
// // }
// // export default Home;


// // import logo from "./logo.svg";
// import "./App.css";
// import { useRef, useState } from "react";
// import MyNotes from 'MyNotes';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// const home = () =>{
//   const [tasks, setTasks] = useState(["t1", "t2", "t3"]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const inputRef = useRef();

//   const handleAddTasks = () => {
//     const newTask = inputRef.current.value;
//     setTasks([...tasks, newTask]);
//     inputRef.current.value = "";
//   };

//   const handleToggleTask = (task) => {
//     if (completedTasks.includes(task)) {
//       setCompletedTasks(completedTasks.filter((completedTask) => completedTask !== task));
//     } else {
//       setCompletedTasks([...completedTasks, task]);
//     }
//   };

//   const handleDeleteTask = (task) => {
//     setTasks(tasks.filter((t) => t !== task));
//   };

//   return (
   
//     <div className="App flex justify-center items-center h-screen ">
//       <Router>
      
//       <nav>
//         <ul>
//           <li>
//             {/* <Link to="/">Home</Link> */}
//           </li>
//           <li>
//             <Link to="/my-notes">My Notes</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />
// <Routes>

//       <Route exact path="/my-notes" element={<MyNotes/>} />
  
// </Routes>
//   </Router>
//   {window.location.pathname  !=="/my-notes" &&(
//       <div className="flex flex-col items-center border border-black h-[300px]" >
//         <h1 class="bg-blue-500 text-white px-4 py-2 text-center w-full">add tasks</h1>
//         <ul>
//           {tasks.map((item) => {
//             const isCompleted = completedTasks.includes(item);
//             return (
//               <li
//                 key={item}
//                 style={{ textDecoration: isCompleted ? "line-through" : "none" }}
//                 onClick={() => handleToggleTask(item)}
//                 onDoubleClick={() => handleDeleteTask(item)}
//               >
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//         <div class="flex mt-auto" >
//         <input ref={inputRef} placeholder="add task" class="border border-black px-4 py-2" />
//         <button onClick={handleAddTasks} class="bg-blue-500 text-white px-4 py-2">add task</button>
//         </div>
//       </div>
//   )}

//     </div>
   
//   );
  
// }

// export default home;
import React, { useState } from 'react';
import './home.css';
const Home=()=>{
    
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add the current input value to the list
    setItems([...items, inputValue]);

    // Clear the input field
    setInputValue('');
  };
  const handleDeleteTask = (task) => {
        setItems(items.filter((t) => t !== task));
      };

  return (
    <>
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit" class="button">Add</button>
      </form>
      <ul>
 
        {items.map((item,index)=>(
            <li onDoubleClick={() => handleDeleteTask(item)} key={index}>
              {item}
              </li>
        ))
        }
      </ul>
    </div>
    </>
  );
};

export default Home;

