import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Timer from "./components/Timer";
import FocusInput from "./components/FocusInput";
import ControlledComponent from "./components/ControlledComponent";
import CounterWithHook from "./components/CounterWithHook";
import TimerConsumer from "./components/TimerConsumer";

function App() {
  const [routes, setRoutes] = useState([
    {
      path: "/hello-world",
      name: "Hello World",
      component: <HelloWorld />,
    },
    {
      path: "/timer",
      name: "Timer",
      component: <Timer />,
    },
    {
      path: "/focus",
      name: "Focus",
      component: <FocusInput />,
    },
    {
      path: "/controlled",
      name: "Controlled",
      component: <ControlledComponent />,
    },
    {
      path: "/custom-hook",
      name: "Custom Hook ",
      component: <CounterWithHook />,
    },
    {
      path: "/timer-context",
      name: "Timer Context",
      component: <TimerConsumer />,
    }
  ]);

  return (
    <Router>
      <nav className="bg-indigo-600 p-4">
        <h1 className="text-white text-4xl font-semibold text-center">Talento Tech</h1>
      </nav>
      <div className="flex bg-slate-100">
        <aside className="bg-indigo-400 p-4 ">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block text-white font-semibold"
            >
              {route.name}
            </Link>
          ))}
        </aside>
        <main className="flex-1 p-4">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
