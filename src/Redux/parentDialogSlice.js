import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  dialogType:''
};

export const parentDialogSlice = createSlice({
  name: "parentDialog",
  initialState,
  reducers: {
    showParentDialog: (state,dialogType) => {
      state.open = true;
      state.dialogType = dialogType.payload;
    },
    hideParentDialog: (state) => {
      state.open = false;
      state.dialogType = '';

    },
  },
});

// Action creators are generated for each case reducer function
export const { showParentDialog, hideParentDialog } = parentDialogSlice.actions;

export default parentDialogSlice.reducer;
