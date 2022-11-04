import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { useUserFecth } from '@/hooks/useUserFecth';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const { user, loading, error } = useUserFecth();

  if(loading){
    return null;
  }

  const containerStyles = {
    minHeight: '70vh',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Layout>
          <Container
            sx={containerStyles}
          >
            <Card user={user} />
          </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default App
