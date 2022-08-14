import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qte: "",
  namePro: "",
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addStock: (state) => {
      localStorage.setItem("stock", JSON.stringify(state));
    },
    handleChange: (state, action) => {
      const { value, name } = action.payload.target;
      state[name] = value;
    },
    deleteStock: (state, action) => {
      const delItem = state.stock.filter(
        (item) => item.name !== action.payload.name
      );
      return (state.stock = delItem);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStock, deleteStock, handleChange } = stockSlice.actions;

export default stockSlice.reducer;
