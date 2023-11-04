import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Timer from "./components/Timer";

function App() {
  const [routes, setRoutes] = useState([
    {
      path: "/hello-world",
      name: "Hello World",
      component: HelloWorld,
    },
    {
      path: "/timer",
      name: "Timer",
      component: Timer,
    }
  ]);

  return (
    <Router>
      <div className="min-h[100vh] min-w-[100vw] bg-slate-400 relative"></div>
      <nav className="absolute top-0 left-0 h-12">
        <h1>Talento Tech</h1>
      </nav>
      <aside className="absolute left-0 top-8 bg-gray-900 text-white min-w-[150px]">
        {routes.map((route) => (
          <Link to={route.path}>
            {route.path}
            {route.name}
          </Link>
        ))}
      </aside>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.component} key={`route-${route.path}`} />
          ))}  
        </Routes>
      </main>
    </Router>
  );
}

export default App;
