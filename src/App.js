import IngredientProduct from "./component/IngredientProduct";
import "./App.css";
import stock from "./store/stockSlice";
import product from "./store/productSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Sales from "./component/Sales";
import Stock from "./component/Stock";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
// create store
const store = configureStore({
  reducer: {
    stock,
    product,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ingredient" element={<IngredientProduct />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
