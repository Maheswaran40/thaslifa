
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const myContext = createContext();

const ContextProvider = ({ children }) => {

  const navigate = useNavigate();
  
  const url = "https://thaslifa.onrender.com";

  
  const [productData, setProductData] = useState([]);

  const productFetchFun = async () => {
    try {
      const productList = await axios.get(`${url}/product/getProduct`);
      setProductData(productList.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productFetchFun();
  }, []);

  
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((i) => i._id === product._id) ? prev : [...prev, product]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((i) => i._id !== id));
  };

  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  
  const cartTotal = cart.reduce((total, item) => {
    const price = Number(
      item.productPrice
        .toString()
        .replace("₹", "")
        .replace(/,/g, "")
        .trim()
    );
    return total + price * item.qty;
  }, 0);

  
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerSubmitFun = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/user/addUser`, {
        registerUsername,
        registerEmail,
        registerPassword,
      });
      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const loginSubmitFun = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/user/getUser`, {
        registerUsername: loginUsername,
        registerPassword: loginPassword,
      });
      console.log("loginUsername",loginUsername)
      localStorage.setItem("username", loginUsername);

      navigate("/slide");
    } catch (err) {
      alert("You have to Register");
    }
  };

  const logoutFun = () => {
    localStorage.removeItem("username")
    navigate("/");
  };

  
  const myContextValue = {
    navigate,
    productData,

    wishlist,
    addToWishlist,
    removeFromWishlist,

    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    cartTotal,

    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerSubmitFun,

    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    loginSubmitFun,
    logoutFun,
    
  };

  return (
    <myContext.Provider value={myContextValue}>
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
