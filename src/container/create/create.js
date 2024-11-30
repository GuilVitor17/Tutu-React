import { useState } from 'react';
import { Button, TextField, Container, Box, Typography, IconButton, InputAdornment, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LogoAmrelo from '../../img/LogoTutuAmare.png';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

function LoginCreate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const FormCreate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                email,
                password,
                name,
            });

            await localStorage.setItem('token', response.data.token);

            let timerInterval;
            await Swal.fire({
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {}, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            });

            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                text: 'Level +20',
                showConfirmButton: false,
                timer: 1500,
            });

            navigate(`/perfil/create`);
        } catch (error) {
            console.log(error);
            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Verifique Seus Dados',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <Grid sx={{width:"100%", backgroundColor: '#f5f5f5', }}>

        <Container 
            maxWidth="sm" 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                
                width:"100%"
            }}
        >
            <Box 
                sx={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: 3,
                    padding: '2rem',
                    textAlign: 'center',
                }}
            >
                <Box sx={{ mb: 4 }}>
                    <img src={LogoAmrelo} alt="Logo" style={{ width: '120px', marginBottom: 16 }} />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" component="h3" color="textPrimary">Realizar Cadastro</Typography>
                </Box>

                <form onSubmit={FormCreate}>
                    <TextField
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={handleName}
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
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
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
                        label="Senha"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePassword}
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff style={{color:"#333"}} /> : <Visibility style={{color:"#333"}} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Typography variant="body2" sx={{ width: "100%" }}>
                        Tem uma conta? <Link to="/login">faça login</Link>
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{ mt: 3 }}
                    >
                        Criar minha conta
                    </Button>
                </form>
            </Box>
        </Container>
        </Grid>

    );
}

export default LoginCreate;
