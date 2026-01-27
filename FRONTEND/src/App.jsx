import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRouter";
import Register from "./Pages/Register";
import Groom from "./Pages/Groom";
import Login from "./Pages/Login";
import ContextProvider from "./Context/ContextProvider";
import Wedding from "./Pages/Wedding";
import Lehenga from "./Pages/Lehenga";
import Saree from "./Pages/Saree";
import Outfit from "./Pages/Outfit";
import Couple from "./Pages/Couple";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Order from "./Pages/Order";
import Slide from "./Pages/Slide";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/slide"
            element={
              <ProtectedRoute>
                <Slide />
              </ProtectedRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/lehenga"
            element={
              <ProtectedRoute>
                <Lehenga />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saree"
            element={
              <ProtectedRoute>
                <Saree />
              </ProtectedRoute>
            }
          />
          <Route
            path="/groom"
            element={
              <ProtectedRoute>
                <Groom />
              </ProtectedRoute>
            }
          />
          <Route
            path="/outfit"
            element={
              <ProtectedRoute>
                <Outfit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/couple"
            element={
              <ProtectedRoute>
                <Couple />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wedding"
            element={
              <ProtectedRoute>
                <Wedding />
              </ProtectedRoute>
            }
          />

          <Route
            path="wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
