import {React,useState}from 'react'
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
  const[alert,setalert]= useState(null);

  const showalert=(message,type)=>{
    setalert({  
      msg: message,
      type: type,
  });
    
   setTimeout(() => {
    setalert(null);
   }, 2000);

  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showalert={showalert}/>
          <Alert alert= {alert}/>
          <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home showalert={showalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showalert={showalert}/>} />
            <Route path="/signup" element={<Signup showalert={showalert}/>} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

