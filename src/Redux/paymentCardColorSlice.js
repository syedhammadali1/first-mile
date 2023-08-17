import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color:''
};

export const paymentCardColorSlice = createSlice({
  name: "parentDialog",
  initialState,
  reducers: {
    setColor: (state,color) => {
      state.color = color.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setColor} = paymentCardColorSlice.actions;

export default paymentCardColorSlice.reducer;
