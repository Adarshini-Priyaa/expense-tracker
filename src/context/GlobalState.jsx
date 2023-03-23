import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRNSACTION":
      return {
        state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

const initialState = {
  transactions: [],
};
// creating context
export const GlobalContent = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRNSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContent.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContent.Provider>
  );
};
