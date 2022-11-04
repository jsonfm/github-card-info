import { Header } from "@/components/Header";
import { Container } from '@mui/material';
export const Layout = ({ children }) => {
    return(
        <>
            <Header/>
            {children}
        </>
    )
}