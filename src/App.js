// // import logo from "./logo.svg";
// import "./App.css";
// import { useRef, useState } from "react";
// import MyNotes from './MyNotes';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// function App() {
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
//             <Link to="/">Home</Link>
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

// export default App;
import react from "react";
// import MyNotes from './MyNotes';
// import Home from './Home'; 
// import myNotes from './components/myNotes';
// import home from './components/home';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useMatch } from 'react-router-dom';
import Home from './components/home';
import MyNotes from "./components/myNotes";
import './App.css';

const ConditionalRender = () => {
  const match = useMatch('/');
  if (match) {
    return <NavigateToMyNotesButton />;
  }
  return <NavigateToHomeButton/>;
};

const App = () => {
  return (
    <Router>
      <>
        <header>
          <nav>Navbar</nav>
          <ConditionalRender />
        </header>

        <body>
          <section>
            <Outlet />
            
          </section>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myNotes" element={<MyNotes />} />
          </Routes>
        </body>
      </>
    </Router>
  );
};

const NavigateToMyNotesButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/myNotes');
  };

  return <button className="navigate" onClick={handleButtonClick}>Go to My Notes</button>;
};

const NavigateToHomeButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return <button className="navigate" onClick={handleButtonClick}>Go back to home</button>;
};



export default App;
