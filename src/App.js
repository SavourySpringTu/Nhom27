import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/main/MainPage';
import ErrorPage from './components/other/ErrorPage';
import Register from './components/sign/Register';
import Login from './components/sign/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<MainPage/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Error' errorElement={<ErrorPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
