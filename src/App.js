import './App.css';
import Home from './scenes/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import PostNew from './scenes/PostNew.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='create' element={<PostNew />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='*' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
