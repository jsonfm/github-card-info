import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Stack, Box } from "@mui/material";
import { SearchBar } from "@/components/SearchBar";
import { Layout } from "@/components/Layout";
import { UserService } from "@/services/user.service";
import { Image } from 'mui-image'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const userService = new UserService();

function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await userService.getUser();
      setUser(response);
    }
    fetchData();
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Layout>
          <Container
            sx={{
              minHeight: '85vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: '400px',
                maxWidth: '900px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <SearchBar />
              <Stack
                sx={{marginTop: "32px"}}
                direction={{ sm: 'row' }}
                spacing={4}
              >
                <div>
                  {user &&
                    <Image
                      height="300px"
                      src={user.avatar_url}
                    />
                  }
                </div>
                <div>
                  Item
                </div>
              </Stack>
            </Box>
          </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default App
