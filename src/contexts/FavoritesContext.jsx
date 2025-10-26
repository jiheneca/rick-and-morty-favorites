import { createContext, useReducer } from "react";
import { favoritesReducer, initialState } from "../reducers/favoritesReducer";


export const FavoritesContext = createContext();


export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  const value = { favorites, dispatch };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider> 
  );
}
