import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";
import { Layout } from "@/components/Layout";
import { UserService } from "@/services/user.service";
import { Card } from "@/components/Card";


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


const userService = new UserService();

function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await userService.getUser();
      setUser(response);
      console.log("response: ", response);
    }
    fetchData();
  }, []);

  const containerStyles = {
    minHeight: '85vh',
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
            <Card user={user}/>
          </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default App
