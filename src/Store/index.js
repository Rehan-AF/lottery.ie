import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  winingNumber: [],
  lotofacilNumber: [],
  quinaNumber: [],
  megaSenaNumber: [],
  DuplaSenaNumber: [],
  lotoManiaNumber: [],
  millionariaNumber: [],
  milliSpecialNumber: [],
  superSeteNumbers: [],
  upcomingLotteryDetails: [
    {
      name: 'milionaria',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'lotofacil',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'quina',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'megaSena',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'lotoMania',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'duplaSena',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    {
      name: 'seuperSete',
      JackpotAmount: '120',
      date: 'یکشنبه ۱۴ آبان',
      time: 'ساعت ۱۸:۰۰',
      jackpotAmountMultiplier: 'میلیارد',
      playFor: '۷۰',
    },
    
  ],
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
    // DuplaSena state
    DuplaSenaPush(state, action) {
      state.DuplaSenaNumber.push(action.payload);
    },
    DuplaSenaupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.DuplaSenaNumber[index]) {
        state.DuplaSenaNumber[index] = newValue;
      }
    },
    DuplaSenaDelete(state, action) {
      const indexToDelete = action.payload;
      state.DuplaSenaNumber.splice(indexToDelete, 1);
    },
    DuplaSenareset(state) {
      state.DuplaSenaNumber = [];
    },
    // DuplaSena state
    lotoManiaPush(state, action) {
      state.lotoManiaNumber.push(action.payload);
    },
    lotoManiaupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.lotoManiaNumber[index]) {
        state.lotoManiaNumber[index] = newValue;
      }
    },
    lotoManiaDelete(state, action) {
      const indexToDelete = action.payload;
      state.lotoManiaNumber.splice(indexToDelete, 1);
    },
    lotoManiareset(state) {
      state.lotoManiaNumber = [];
    },
    // Millionaria State
    millionariaPush(state, action) {
      state.millionariaNumber.push(action.payload);
    },
    millionariaupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.millionariaNumber[index]) {
        state.millionariaNumber[index] = newValue;
      }
    },
    millionariaDelete(state, action) {
      const indexToDelete = action.payload;
      state.millionariaNumber.splice(indexToDelete, 1);
    },
    millionariareset(state) {
      state.millionariaNumber = [];
    },
    // Millionaria Special Numbers
    milliSpecialPush(state, action) {
      state.milliSpecialNumber.push(action.payload);
    },
    milliSpecialupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.milliSpecialNumber[index]) {
        state.milliSpecialNumber[index] = newValue;
      }
    },
    milliSpecialDelete(state, action) {
      const indexToDelete = action.payload;
      state.milliSpecialNumber.splice(indexToDelete, 1);
    },
    milliSpecialreset(state) {
      state.milliSpecialNumber = [];
    },
    // super sete state
    superSetePush(state, action) {
      state.superSeteNumbers.push(action.payload);
    },
    superSeteupdate(state, action) {
      const { index, newValue } = action.payload;
      if (state.superSeteNumbers[index]) {
        state.superSeteNumbers[index] = newValue;
      }
    },
    superSeteDelete(state, action) {
      const indexToDelete = action.payload;
      state.superSeteNumbers.splice(indexToDelete, 1);
    },
    superSetereset(state) {
      state.superSeteNumbers = [];
    },
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
  DuplaSenaPush,
  DuplaSenaupdate,
  DuplaSenaDelete,
  DuplaSenareset,
  lotoManiaPush,
  lotoManiaupdate,
  lotoManiaDelete,
  lotoManiareset,
  millionariaPush,
  millionariaupdate,
  millionariaDelete,
  millionariareset,
  milliSpecialPush,
  milliSpecialupdate,
  milliSpecialDelete,
  milliSpecialreset,
  superSetePush,
  superSeteupdate,
  superSeteDelete,
  superSetereset,
} = productsSlice.actions;

export default productsSlice.reducer;
