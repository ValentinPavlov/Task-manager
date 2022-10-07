import {Routes,Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import TaskPage from './pages/TaskPage/TaskPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/tasks" element={<TaskPage/>}></Route>
    </Routes>
 
  );
}

export default App;
