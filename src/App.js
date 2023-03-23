import './App.css';
import Login from './frontend/admin/login/Login';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import AdminDash from './frontend/admin/Dash/AdminDash';
import Home from './frontend/home/Home';
import StuHome from './frontend/user/studentHome/StuHome';

function App() {
  return (
    <>
      <Router>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/login' element={<Login/>}  />
             <Route path='/adminDash' element={<AdminDash/>} />
             <Route path='/stuhome' element={<StuHome/>} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
