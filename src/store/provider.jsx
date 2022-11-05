import { useReducer } from "react";
import { AppContext } from "@/store/context";
import { initialState } from "@/store/state";
import { reducer } from "@/reducers";


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState());

    const store = {
        state,
        dispatch
    }

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}