import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  formType:''
};

export const nestedFormDialogSlice = createSlice({
  name: "nestedFormDialog",
  initialState,
  reducers: {
    open: (state,formType) => {
      state.open = true;
      state.formType = formType.payload;
    },
    close: (state) => {
      state.open = false;
      state.formType = '';

    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = nestedFormDialogSlice.actions;

export default nestedFormDialogSlice.reducer;
