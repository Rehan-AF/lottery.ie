import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  winingNumber: [],
  lotofacilNumber: [],
  quinaNumber: [],
  megaSenaNumber: [],
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
    // LotoFacil States
    lotofacilPush(state, action) {
      state.lotofacilNumber.push(action.payload);
    },
    lotofacilupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.lotofacilNumber[index]) {
        state.lotofacilNumber[index] = newValue;
      }
    },
    lotofacilDelete(state, action) {
      const indexToDelete = action.payload;
      state.lotofacilNumber.splice(indexToDelete, 1);
    },
    lotofacilreset(state) {
      state.lotofacilNumber = [];
    },
    // Quina state
    quinaPush(state, action) {
      state.quinaNumber.push(action.payload);
    },
    quinaupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.quinaNumber[index]) {
        state.quinaNumber[index] = newValue;
      }
    },
    quinaDelete(state, action) {
      const indexToDelete = action.payload;
      state.quinaNumber.splice(indexToDelete, 1);
    },
    quinareset(state) {
      state.quinaNumber = [];
    },
    // Mega Sena state
    megaSenaPush(state, action) {
      state.megaSenaNumber.push(action.payload);
    },
    megaSenaupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.megaSenaNumber[index]) {
        state.megaSenaNumber[index] = newValue;
      }
    },
    megaSenaDelete(state, action) {
      const indexToDelete = action.payload;
      state.megaSenaNumber.splice(indexToDelete, 1);
    },
    megaSenareset(state) {
      state.megaSenaNumber = [];
    },
    // millionaria state
  },
});

export const {
  pushNumbersToWiningNumbers,
  updateWiningNumberAtIndex,
  deleteWiningNumber,
  resetState,
  lotofacilPush,
  lotofacilupdate,
  lotofacilDelete,
  lotofacilreset,
  quinaPush,
  quinaupdate,
  quinaDelete,
  quinareset,
  megaSenaPush,
  megaSenaupdate,
  megaSenaDelete,
  megaSenareset,
} = productsSlice.actions;

export default productsSlice.reducer;
