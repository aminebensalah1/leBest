import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [
        { name: "salad ", value: null },
        { name: "Beef ", value: null },
        { name: "Chicken", value: null },
      ],

  plus: false,
  boolean: false,
  addProperty: "",
  addProduct: "",
};
// let prod = localStorage.getItem("products");
// initialState.products = JSON.parse(prod);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    submitAddProduct: (state) => {
      if (state.product) {
        localStorage.setItem("products", JSON.stringify(state.product));
      }
    },
    handleAdd: (state, action) => {
      const { product, plus, boolean, addProduct, addProperty } = state;
      const name = action.payload;
      if (name === "addProperty") {
        const newOb = { name: addProperty, value: null };
        state.product.push(newOb);
        const newState = { ...state };
        newState.addProperty = "";
        return state;

        // plus(false);
      } else if (name === "addProduct") {
        return { ...state, boolean: true };
      } else if (name === "plus") {
        return { ...state, plus: true };
      }
    },
    // change input
    handleChange: (state, action) => {
      const { product, plus, boolean, addProduct, addProperty } = state;
      const { value, name } = action.payload.target;

      if (name === "addProperty") {
        return { ...state, addProperty: value };
      } else if (name === "addProduct") {
        return { ...state, addProduct: value };
      } else {
        const myProduct = product.find((pro) => pro.name === name);
        myProduct.value = parseInt(value);

        product.push(product);
      }
    },
    handleChangeInputProduct: (state, action) => {
      const { name, value } = action.payload.target;
      const findObj = state.product.find((pro) => pro.name === name);
      findObj.value = parseInt(value);
    },
    handleDelete: (state, action) => {
      const { name } = action.payload.target;
      const filterProduct = state.product.filter((pro) => pro.name !== name);
      state.product = filterProduct;
    },
    handleSubmitProduct: (state) => {
      localStorage.setItem("products", JSON.stringify(state.product));
    },
    handleClearProduct: () => {
      localStorage.removeItem("products");
    },
  },
});

export const {
  submitAddProduct,
  handleAdd,
  handleChange,
  handleChangeInputProduct,
  handleDelete,
  handleClearProduct,
} = productSlice.actions;

export default productSlice.reducer;
