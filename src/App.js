import './App.scss';
import { List } from './Components/List/List';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
        <Routes>
          <Route path="/TuPedido" element={<List />}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
