import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "buttonSlice",
  initialState: {
    step: 2,
    optionDetails: null,
    extrasDetails: [],
  },
  reducers: {
    SubmitStep(state) {
      state.step = state.step + 1;
    },
    back(state) {
  
      if (state.step === 4) {
        console.log('elo')
        state.extrasDetails = []
        state.step--;
      } else {
        state.step--;
      }
     
    },
    addItems(state, action) {
      state.optionDetails = {
        type: action.payload.type,
        programName: action.payload.programName,
        programPrice: action.payload.programPrice,
      };
    },
    addExtras(state, action) {
    state.extrasDetails.push(...action.payload)
    },
    change(state) {
      state.optionDetails = null
      state.extrasDetails = []
      state.step = 2
    }
  },
});

export const buttonActions = buttonSlice.actions;
export default buttonSlice;
