import { configureStore } from "@reduxjs/toolkit";
import cardModalReducer from "./cardModalSlice";
import nestedFormDialogReducer from "./nestedFormDialogSlice";
import dualNestedFormDialogReducer from "./dualNestedFormDialogSlice";
import parentDialogReducer from "./parentDialogSlice";
import projectInfoReducer from "./projectInfoSlice";
import paymentCardColorReducer from "./paymentCardColorSlice";

export default configureStore({
  reducer: {
    cardModal: cardModalReducer,
    parentDialog: parentDialogReducer,
    nestedFormDialog: nestedFormDialogReducer,
    dualNestedFormDialog: dualNestedFormDialogReducer,
    projectInfo: projectInfoReducer,
    paymentCardColor: paymentCardColorReducer,
  },
});
