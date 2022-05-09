import { createContext } from "react";

export const inicialState = {
  list: [],
  item: {},
};
export const Store = createContext(inicialState);
