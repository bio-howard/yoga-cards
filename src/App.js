import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Poses from "./components/Poses";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/poses' element={<Poses />} />
      </Routes>
    </Router>
  );
}

export default App;
