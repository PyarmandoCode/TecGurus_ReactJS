import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowAutos from './components/ShowAutos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAutos></ShowAutos>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
