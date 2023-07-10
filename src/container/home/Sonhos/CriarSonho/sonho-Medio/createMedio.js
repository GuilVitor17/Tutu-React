import { Link, useNavigate } from 'react-router-dom';
import '../CriarSonhos-modules.css'
import Button from 'react-bootstrap/esm/Button';
import MenuBaixo from '../../../navbar/menuBaixo';
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png'
import { useState } from 'react';




function CreateSonhos() {

    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)



    const handleClick1 = () => {

        setDisabled(false)
        const color1 = document.getElementById('sonho-color1');
        const color4 = document.getElementById('sonho-color4');
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color5 = document.getElementById('sonho-color5');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');

        color1.style.backgroundColor = '#FED141'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Estudo')


    }

    const handleClick2 = () => {

        setDisabled(false)
        const color4 = document.getElementById('sonho-color4');
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color5 = document.getElementById('sonho-color5');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color2.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Casa')



    }


    const handleClick3 = () => {

        setDisabled(false)
        const color4 = document.getElementById('sonho-color4');
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color5 = document.getElementById('sonho-color5');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color3.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'formatura')



    }


    const handleClick4 = () => {

        setDisabled(false)
        const color4 = document.getElementById('sonho-color4');
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color5 = document.getElementById('sonho-color5');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color4.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Estudo')




    }

    const handleClick5 = () => {

        setDisabled(false)
        const color5 = document.getElementById('sonho-color5');
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color4 = document.getElementById('sonho-color4');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color5.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Casa')



    }


    const handleClick6 = () => {

        setDisabled(false)
        const color6 = document.getElementById('sonho-color6');
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color5 = document.getElementById('sonho-color5');
        const color4 = document.getElementById('sonho-color4');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color6.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'formatura')



    }


    const handleClick7 = () => {

        setDisabled(false)
        const color7 = document.getElementById('sonho-color7');
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color6 = document.getElementById('sonho-color6');
        const color5 = document.getElementById('sonho-color5');
        const color4 = document.getElementById('sonho-color4');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color7.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Estudo')



    }


    const handleClick8 = () => {

        setDisabled(false)
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color7 = document.getElementById('sonho-color7');
        const color6 = document.getElementById('sonho-color6');
        const color5 = document.getElementById('sonho-color5');
        const color4 = document.getElementById('sonho-color4');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color8.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color9.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'Casa')




    }


    const handleClick9 = () => {

        setDisabled(false)
        const color9 = document.getElementById('sonho-color9');
        const color8 = document.getElementById('sonho-color8');
        const color7 = document.getElementById('sonho-color7');
        const color6 = document.getElementById('sonho-color6');
        const color5 = document.getElementById('sonho-color5');
        const color4 = document.getElementById('sonho-color4');
        const color3 = document.getElementById('sonho-color3');
        const color2 = document.getElementById('sonho-color2');
        const color1 = document.getElementById('sonho-color1');
        color9.style.backgroundColor = '#FED141'
        color1.style.backgroundColor = 'transparent'
        color2.style.backgroundColor = 'transparent'
        color3.style.backgroundColor = 'transparent'
        color4.style.backgroundColor = 'transparent'
        color5.style.backgroundColor = 'transparent'
        color6.style.backgroundColor = 'transparent'
        color7.style.backgroundColor = 'transparent'
        color8.style.backgroundColor = 'transparent'
        localStorage.setItem('Sonho', 'formatura')

    }






    const handlenavigate = async () => {

        await navigate(`/perfil/createsonhospostFormMedio`)
    }






    return (
        <div className="create-sonhos-create">

            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/perfil/createsonhos'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></div></Link>
                </div>
            </div>

            <Perfil />

            <div className='div-sonhos-categoria'>


                <p>Qual a categoria de seu sonho?</p>

                <div className='valore'>

                    <div id='sonho-color1' onClick={handleClick1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg></div>
                    <div id='sonho-color2' onClick={handleClick2}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                    </svg></div>
                    <div id='sonho-color3' onClick={handleClick3}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg></div>
                    <div id='sonho-color4' onClick={handleClick4}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg></div>
                    <div id='sonho-color5' onClick={handleClick5}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                    </svg></div>
                    <div id='sonho-color6' onClick={handleClick6}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg></div>
                    <div id='sonho-color7' onClick={handleClick7}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg></div>
                    <div id='sonho-color8' onClick={handleClick8}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                    </svg></div>
                    <div id='sonho-color9' onClick={handleClick9}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg></div>




                </div>

                <Button disabled={disabled} onClick={handlenavigate} variant="warning" className='prosseguir-create'><b>Prosseguir</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></Button>{' '}

            </div>

            <MenuBaixo />


        </div>
    );
}

export default CreateSonhos;
