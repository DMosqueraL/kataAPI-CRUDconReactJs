import React, { useReducer } from "react";
import { inicialState, Store } from "./inicialState";
import { reducer } from "./redireccionamiento/reducer";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inicialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
