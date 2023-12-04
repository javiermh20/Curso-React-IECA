import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Auth from "./hoc/Auth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/auth/Home";
import IndividualChat from "./components/IndividualChat";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="w-full flex justify-center">
          <div className="container flex text-white p-4">
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
