import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import './App.css'

function App() {
 

  return (
    <div className="app-container">
      
      <Navbar />
  
      <div className="container">
        <Outlet />
      </div>
      
      <Footer />
    </div>
    
  )
}

export default App
