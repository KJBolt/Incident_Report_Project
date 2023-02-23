import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage';
import AddIncidence from './pages/AddIncidence';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />}/>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/upload' element={<AddIncidence />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
