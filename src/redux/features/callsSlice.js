import {createSlice} from "@reduxjs/toolkit";
import {fetchCalls} from "./asyncActions";

const initialState = {
  calls: [],
  filter:[],
  status: null,
  error: null,
}

export const callSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setItems(state, action) {
      state.filter=action.payload;
    },
  },
  // extraReducers:{
  //   [fetchCalls.pending] :(state) =>{state.status = 'loading'},
  //   [fetchCalls.fulfilled] :(state,action) =>{
  //     state.status = 'resolved';
  //     state.calls = action.payload;
  //   },
  //   [fetchCalls.rejected] :(state,action) =>{},
  // }
  extraReducers: (builder) => {
    builder
        .addCase(fetchCalls.pending, (state) => {
          state.status = 'loading'
          state.calls = []
        })
        .addCase(fetchCalls.fulfilled, (state, action) => {
          state.calls = action.payload;
          state.status = 'resolved'
        })
        .addCase(fetchCalls.rejected, (state, action) => {
          state.status = 'rejected'
          state.items = [];
        })

  },
})

export const {setItems} = callSlice.actions;
export default callSlice.reducer;
