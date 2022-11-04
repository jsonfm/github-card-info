import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export const Layout = ({ children }) => {
    return(
        <>
            <Header/>
            <main style={{minHeight: "90vh"}}>
                {children}
            </main>
            <Footer />
        </>
    )
}