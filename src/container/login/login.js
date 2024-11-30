import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Link as MuiLink,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import LogoAmrelo from '../../img/LogoTutuAmare.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const Formlogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/authenticate`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('IdUser', response.data.user._id);

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Login bem-sucedido!',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/home');
      window.location.reload();
    } catch (error) {
      console.log("erro", error)
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Erro no login! Verifique seus dados.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          backgroundColor: '#fff',
          padding: 3,
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <img src={LogoAmrelo} alt="Logo" style={{ width: '120px', marginBottom: 16 }} />
        <Typography variant="h6" color="textPrimary" gutterBottom>
          O <strong>melhor</strong> app de gestão financeira infantil do mercado!
        </Typography>
        <form onSubmit={Formlogin}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Usuário"
            type="email"
            value={email}
            onChange={handleEmail}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{color:"#333"}} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePassword}
            required
            InputProps={{
              
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff style={{color:"#333"}} /> : <Visibility style={{color:"#333"}} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
         
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar em minha conta
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2, width:"100%" }}>
          Não tem uma conta?{' '}
          <MuiLink component={Link} to="/logincreate" underline="hover">
            Registre-se
          </MuiLink>
        </Typography>
       
      </Box>
    </Box>
  );
}

export default Login;
