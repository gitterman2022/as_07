import './App.css';
import Home from './components/user/pages/Home/Home';
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/user/pages/Login/Login'
import Dashboard from './components/dashboard/MainDashboard/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ff" element={<Home />}/>
          <Route path="/fff" element={<Home />}/>
          <Route path="/ffff" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
