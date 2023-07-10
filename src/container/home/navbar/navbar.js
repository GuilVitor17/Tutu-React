import './navbar-modules.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../../img/LogoTutu.png'
import { Link } from 'react-router-dom';



function Navbarr() {


    return (
        <div className="navbar">
          <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Navbar.Toggle aria-controls="navbarScroll" /></Navbar.Brand>
        <div className='LogoHome'><img src={Logo}/></div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxWidth: '500px' }}
            navbarScroll
          >
           <Link to={`/perfil/curso/aulas/check`}><Nav.Link href="#action1"><b className='b-menu'>Comprar Curso</b></Nav.Link></Link>
           <Link to={`/perfil/game`}><Nav.Link href="#action1"><b className='b-menu'>Game</b></Nav.Link></Link>
           <Link to={`/perfil/quiz`}><Nav.Link href="#action1"><b className='b-menu'>Quiz</b></Nav.Link></Link>
           <Link to={`/perfil/:id`}><Nav.Link href="#action1"><b className='b-menu'>Perfil</b></Nav.Link></Link>
           <Link to={`/perfil/aulaspagas`}><Nav.Link href="#action1"><b className='b-menu'>Meus Curso</b></Nav.Link></Link>
           <Link to={`/perfil/createsonhos`}><Nav.Link href="#action1"><b className='b-menu'>Sonhos</b></Nav.Link></Link>
           <Link to={`/perfil/tarefa`}><Nav.Link href="#action1"><b className='b-menu'>Tarefas</b></Nav.Link></Link>
           <Link to={`/perfil/anotacoes`}><Nav.Link href="#action1"><b className='b-menu'>Anotaçoes</b></Nav.Link></Link>
           <Link to={`/perfil/trofeus`}><Nav.Link href="#action1"><b className='b-menu'>Trofeus</b></Nav.Link></Link>
           <Link to={`/perfil/config`}><Nav.Link href="#action1"><b className='b-menu'>Configurações</b></Nav.Link></Link>
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        </div>
    );
}

export default Navbarr;
