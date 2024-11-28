import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define the main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Corrected route to lowercase */}
      </Routes>
    </div>
  );
}

export default App;
