
import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  books: [],
  x:""
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getBooks = async () => {
        const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=ODg6YIGnkG7BRGGEg4VEKacGnDIQPAMH');
        dispatch({
          type: "GET_BOOKS",
          payload: res.data.results,
        });
      };

      const x=()=>{
      
      }
    
      return (
        <GlobalContext.Provider
          value={{
            books: state.books,
            getBooks,
            x
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}  