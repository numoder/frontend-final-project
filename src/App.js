import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './scenes/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import NewPost from './scenes/NewPost';
import "xp.css/dist/XP.css";


function App() {

  return (
    <>
      <Routes>
        <Route path='create' element={<NewPost />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='*' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;