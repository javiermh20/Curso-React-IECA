import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import HelloWorld from "./components/HelloWorld";
import Timer from "./components/Timer";

function App() {
  return (
    <Router>
      <nav className="bg-indigo-600 p-4">
        <h1 className="text-white text-4xl font-semibold text-center">Talento Tech</h1>
      </nav>
      <div className="flex">
        <aside className="bg-indigo-400 p-4 ">
          <Link to="/hello-world" className="block text-white hover:underline my-2">
            Hello World
          </Link>
          <Link to="/timer" className="block text-white hover:underline my-2">
            Timer
          </Link>
        </aside>
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/hello-world" element={<HelloWorld />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
