import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  winingNumber: [],
};

const productsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    pushNumbersToWiningNumbers(state, action) {
      state.winingNumber.push(action.payload);
    },
    updateWiningNumberAtIndex(state, action) {
      const { index, newValue } = action.payload;
      if (state.winingNumber[index]) {
        state.winingNumber[index] = newValue;
      }
    },
    deleteWiningNumber(state, action) {
      const indexToDelete = action.payload;
      state.winingNumber.splice(indexToDelete, 1);
    },
    resetState(state) {
      state.winingNumber = [];
    },
  },
});

export const {
  pushNumbersToWiningNumbers,
  updateWiningNumberAtIndex,
  deleteWiningNumber,
  resetState,
} = productsSlice.actions;

export default productsSlice.reducer;
