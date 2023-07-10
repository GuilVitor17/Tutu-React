import './navbar-modules.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../../img/LogoTutu.png'
import { useNavigate } from 'react-router-dom';



function MenuBaixo() {

    const navigate = useNavigate()



    const handlecolorHome = async () => {

        await navigate(`/home`)


        const home = document.getElementById("home");
        const play = document.getElementById("play");
        const user = document.getElementById("user");
        const config = document.getElementById("config");
        home.style.color = '#929DA9'
        play.style.color = '#FFF'
        user.style.color = '#FFF'
        config.style.color = '#FFF'



    }

    const handlecolorPlay = async () => {


        await navigate(`/perfil/aulaspagas`)


        const home = document.getElementById("home");
        const play = document.getElementById("play");
        const user = document.getElementById("user");
        const config = document.getElementById("config");
        home.style.color = '#FFF'
        play.style.color = '#929DA9'
        user.style.color = '#FFF'
        config.style.color = '#FFF'


    }


    const handlecolorUser = async () => {

        await navigate(`/perfil/:id`)


        const home = document.getElementById("home");
        const play = document.getElementById("play");
        const user = document.getElementById("user");
        const config = document.getElementById("config");
        home.style.color = '#FFF'
        play.style.color = '#FFF'
        user.style.color = '#929DA9'
        config.style.color = '#FFF'


    }


    const handlecolorConfig = async () => {

        await navigate(`/perfil/config`)



        const home = document.getElementById("home");
        const play = document.getElementById("play");
        const user = document.getElementById("user");
        const config = document.getElementById("config");
        home.style.color = '#FFF'
        play.style.color = '#FFF'
        user.style.color = '#FFF'
        config.style.color = '#929DA9'






    }


    return (
        <div className="MenuBaixo">

            <div className='menu-options'>
                <div><svg xmlns="http://www.w3.org/2000/svg" onClick={handlecolorHome} id='home' width="16" height="16" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16">
                    <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z" />
                    <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z" />
                </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" onClick={handlecolorPlay} id='play' width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" onClick={handlecolorUser} id='user' width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" onClick={handlecolorConfig} id='config' width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg></div>
            </div>

        </div>
    );
}

export default MenuBaixo;
