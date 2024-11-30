import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../img/LogoTutu.png';
import { MenuOpen } from '@mui/icons-material';

function Navbarr() {
  const [isOpen, setIsOpen] = useState(false); // Controle de visibilidade do menu

  // Função para alternar a visibilidade do menu lateral
  const toggleDrawer = (open) => {
    setIsOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', link: '/home' },
    { text: 'Comprar Curso', link: '/perfil/curso/aulas/check' },
    { text: 'Game', link: '/perfil/game' },
    { text: 'Perfil', link: '/perfil/:id' },
    { text: 'Meus Cursos', link: '/perfil/aulaspagas' },
    { text: 'Sonhos', link: '/perfil/createsonhos' },
    { text: 'Tarefas', link: '/perfil/tarefa' },
    { text: 'Anotações', link: '/perfil/anotacoes' },
    { text: 'Trofeus', link: '/perfil/trofeus' },
    { text: 'Configurações', link: '/perfil/config' },
  ];

  return (
    <Box>
      {/* Botão de Menu com o ícone Home */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => toggleDrawer(true)}
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1000,
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '50%',
          padding: 2,
          '&:hover': {
            backgroundColor: '#333', // Remover o hover
          },
        }}
      >
        <MenuOpen /> {/* Novo ícone aqui */}
      </IconButton>

      {/* Menu Lateral (Drawer) */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#333',  // Cor do fundo do menu
            color: 'white',           // Cor do texto
            paddingTop: 8,            // Espaçamento superior
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 2,
          }}
        >
          {/* Logo */}
         <Link to={'/home'}><div style={{ padding: 20 }}>
            <img src={Logo} alt="Logo" style={{ width: '100%', maxWidth: 150 }} />
          </div>
          </Link> 

          {/* Lista de itens do menu */}
          <List sx={{ width: '100%' }}>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent', // Desativar o hover
                  },
                }}
              >
                <Link to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbarr;
