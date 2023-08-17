import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  cardType:''
};

export const cardModalSlice = createSlice({
  name: "cardModal",
  initialState,
  reducers: {
    openModal: (state,cardType) => {
      state.open = true;
      state.cardType = cardType.payload;
    },
    close: (state,cardType) => {
      state.open = false;
      state.cardType = cardType.payload;

    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, close } = cardModalSlice.actions;

export default cardModalSlice.reducer;
