import * as React from 'react'; 
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import TextField from '@mui/material/TextField'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox'; 
import Link from '@mui/material/Link'; 
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box'; 
import ContactsIcon from '@mui/icons-material/Contacts'; 
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl'; 
import Select from '@mui/material/Select'; 
 
function Copyright(props) { 
  return ( 
    <Typography variant="body2" color="text.secondary" align="center" {...props}> 
      {'Copyright © '} 
      <Link color="inherit" href="https://www.kluniversity.in/"> 
        KLEF 
      </Link>{' '} 
      {new Date().getFullYear()} 
      {'.'} 
    </Typography> 
  ); 
} 
 
// TODO remove, this demo shouldn't need to reset the theme. 
 
const defaultTheme = createTheme(); 
 
export default function Contactinfo() { 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    console.log({ 
      name: data.get('name'), 
      role: data.get('code'), 
      email: data.get('email'), 
      password: data.get('password'), 
    }); 
  }; 
  const [code, setcode] = React.useState(''); 
 
  const handleChange = (event) => { 
    setcode(event.target.value); 
  }; 
   
  return ( 
    <ThemeProvider theme={defaultTheme}> 
      <Container component="main" maxWidth="xs"> 
        <CssBaseline /> 
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        > 
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
            <ContactsIcon/> 
          </Avatar> 
          <Typography component="h1" variant="h5"> 
            Contactus
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> 
            <Grid container spacing={2}> 
              <Grid item xs={12} sm={6}> 
                <TextField 
                  autoComplete="given-name" 
                  name="name" 
                  required 
                  fullWidth 
                  id="name" 
                  label="Name" 
                  autoFocus 
                /> 
              </Grid>  
              <Grid item xs={12} sm={6}> 
              <TextField 
                  autoComplete="given-name" 
                  name="Last name" 
                  required 
                  fullWidth 
                  id="Last name" 
                  label="Last Name" 
                  autoFocus 
                /> 
              </Grid> 
              <Grid item xs={12} sm={6}> 
              <Box sx={{ minWidth: 120 }}> 
      <FormControl fullWidth> 
        <InputLabel id="demo-simple-select-label">code</InputLabel> 
        <Select 
          labelId="demo-simple-select-label" 
          id="demo-simple-select" 
          name='code' 
          value={code} 
          label="code" 
          onChange={handleChange} 
        > 
          <MenuItem value={1}>+91</MenuItem> 
          <MenuItem value={2}>+1</MenuItem> 
          <MenuItem value={3}>+13</MenuItem> 
          <MenuItem value={4}>+12</MenuItem> 
     
        </Select> 
      </FormControl> 
    </Box> 
    </Grid>
    <Grid item xs={12} sm={6}> 
              <TextField 
                  autoComplete="given-name" 
                  name="mobileno" 
                  required 
                  fullWidth 
                  id="mobileno" 
                  label="mobileno" 
                  autoFocus 
                /> 
              </Grid>
              <Grid item xs={12}> 
                <TextField 
                  required 
                  fullWidth 
                  id="email" 
                  label="Email Address" 
                  name="email" 
                  autoComplete="email" 
                /> 
              </Grid> 
              <Grid item xs={12}> 
                <TextField 
                  required 
                  fullWidth 
                  name="password" 
                  label="Password" 
                  type="password" 
                  id="password" 
                  autoComplete="new-password" 
                />
                </Grid> 
              <Grid item xs={12}> 
                <FormControlLabel 
                  control={<Checkbox value="allowExtraEmails" color="primary" />} 
                  label="I want to receive inspiration, marketing promotions and updates via email." 
                /> 
              </Grid> 
            </Grid> 
            
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }} 
            > 
              submit 
            </Button> 
            <Grid container justifyContent="flex-end"> 
              <Grid item> 
                {/* <Link href="/signin" variant="body2"> 
                  Already have an account? Sign in 
                </Link>  */}
              </Grid> 
            </Grid> 
          </Box> 
        </Box> 
        <Copyright sx={{ mt: 5 }} /> 
      </Container> 
    </ThemeProvider> 
  ); 
}

