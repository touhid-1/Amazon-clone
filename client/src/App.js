import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
