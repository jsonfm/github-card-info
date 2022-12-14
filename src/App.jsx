import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { AppProvider } from "@/store/provider";
import { ThemeProvider } from "@/theme";


function App() {
  const containerStyles = {
    minHeight: '70vh',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <AppProvider>
      <ThemeProvider>
        <CssBaseline/>
        <Layout>
            <Container
              sx={containerStyles}
            >
              <Card />
            </Container>
        </Layout>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
