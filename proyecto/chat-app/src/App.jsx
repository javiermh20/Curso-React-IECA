import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Auth from "./hoc/Auth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/auth/Home";
import IndividualChat from "./components/IndividualChat";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                element={
                  <Auth>
                    <Outlet />
                  </Auth>
                }
              >
                <Route path="/home" element={<Home />} />
                <Route path="/chat/:chatId" element={<IndividualChat />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
