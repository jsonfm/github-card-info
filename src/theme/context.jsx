import { useContext, createContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useThemeContext = () => {
    return useContext(ColorModeContext);
}