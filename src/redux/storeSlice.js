import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitor: {},
  user: {},
  currentClient: {},
  currentIvoice: {},
  generatedInvoice: {},
  invoices: {},
  withdraw: {},
  ownerClients: {},
  transactions: {},
  transactionFilter: {},
  clientSearch:{},
  notifications:[]
};

const storeSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    setCurrentVisitor: (state, action) => {
      state.visitor = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setGenereatedInvoices: (state, action) => {
      state.generatedInvoice = action.payload;
    },

    setCurrentClient: (state, action) => {
      const clientId = action.payload;
      console.log(action.payload);
      const exactClient = state.user.client;
      const searchClient = exactClient.find((client) => client.id === clientId);
      state.currentClient = searchClient;
      // state.currentClient = clientId
    },
    initCurrentClient:(state, action)=>{
state.currentClient = action.payload
    },
    setCurrentInvoice: (state, action) => {
      state.currentIvoice = action.payload;
    },
    getInvoice: (state, action) => {
      state.invoices = action.payload;
    },
    getWithdrawal: (state, action) => {
      state.invoices = action.payload;
    },
    getOwnerClients: (state, action) => {
      state.ownerClients = action.payload;
      state.client = action.payload
    },

    filterTransaction: (state, action) => {
      state.transactionFilter = state.transactions.filter((trans) =>
        trans.type.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    allTransaction: (state, action) => {
      state.transactionFilter = action.payload
    },

    getTransactions: (state, action) => {
      state.transactions = action.payload;
    },
     getNotification:(state, action)=>{
      
 let  notice  =  []


if(state.notifications.length > 0){
  notice = state.notifications
  
}

notice.push(action.payload)

      state.notifications =  notice
      
    },
     clearNotification:(state, action)=>{
      
    state.notifications = []
      
    },

    searchClient:(state, action)=>{
      const client  = state.ownerClients
      state.client =  client.filter((client)=>client.name.toLowerCase().includes(action.payload.toLowerCase()))
    },

   
  },
});

export const {
  setCurrentVisitor,
  setUser,
  setCurrentClient,
  setCurrentInvoice,
  setGenereatedInvoices,
  initCurrentClient,
  getInvoice,
  getWithdrawal,
  getOwnerClients,
  getNotification,
  clearNotification,
  getTransactions,
  filterTransaction,
  allTransaction,
  searchClient,
} = storeSlice.actions;

export default storeSlice.reducer;
