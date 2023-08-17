import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  formType:''
};

export const dualNestedFormDialogSlice = createSlice({
  name: "dualNestedFormDialog",
  initialState,
  reducers: {
    openDualNested: (state,formType) => {
      state.open = true;
      state.formType = formType.payload;
    },
    closeDualNested: (state) => {
      state.open = false;
      state.formType = '';

    },
  },
});

// Action creators are generated for each case reducer function
export const { openDualNested, closeDualNested } = dualNestedFormDialogSlice.actions;

export default dualNestedFormDialogSlice.reducer;
