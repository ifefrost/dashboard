import "@fontsource/inter";
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Policies from "./pages/Policies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/help' element={<Help />} />
            <Route exact path='/policies' element={<Policies />} />
            <Route exact path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
