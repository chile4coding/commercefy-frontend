import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  visitor: {},
  user:{}

};

const storeSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {

 setCurrentVisitor:(state, action)=>{
state.visitor = action.payload

 },
 getUser:(state, action)=>{

 }
  },
});


export const {

  setCurrentVisitor,
  getUser

} = storeSlice.actions;
export default storeSlice.reducer;
