import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },

    decrement(state, action) {
      state.counter--;
    },

    add(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;

// ------------------ old version of redux.......---------//
// import { legacy_createStore as createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {
//   if (action.type === "Inc") {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === "Dec") {
//     return { counter: state.counter - 1 };
//   }

//   if (action.type === "Add") {
//     return { counter: state.counter + action.payload };
//   }

//   return state;
// };

// const store = createStore(reducerFn);
// export default store;
