import './App.css';
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import Navbar from './components/Navbar';
import CreatorPage from './CreatorResume';
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage/>}/>
       <Route path='/assignment-1' element={<Assignment1/>}/>
       <Route path='/assignment-2' element={<Assignment2/>}/>
       <Route path='/creator' element={<CreatorPage/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
