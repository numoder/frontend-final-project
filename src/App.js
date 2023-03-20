import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewPost from './scenes/NewPost.jsx';
import Home from './scenes/Home.jsx';
import "xp.css/dist/XP.css";
import './App.css';
import "./components/modalStyles.css";



function App() {
  // for dark mode
  const [theme, setTheme] = useState('light');
  return (
    <>
    <div className={`App ${theme}`}> {/*theme*/}
      <Routes>
        <Route path='create' element={<NewPost />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='*' element={<Home />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;