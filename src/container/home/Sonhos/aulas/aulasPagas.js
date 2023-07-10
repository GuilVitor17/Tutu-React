import { Link, useNavigate } from 'react-router-dom';
import './aulas-modules.css'
import Logo from '../../../../img/LogoTutu.png'
import Perfil from '../../perfil/perfil';
import MenuBaixo from '../../navbar/menuBaixo';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ImgCurso from '../../../../img/curso.png'
import { Alert } from 'bootstrap';



function AulasPagas() {

    const token = localStorage.getItem('token')
    const [idCurso, setIdCurso] = useState('')
    const iduser = localStorage.getItem('IdUser')
    const navigate = useNavigate()



    useEffect(() => {

        const handleFotoId = async () => {
            

            try {

                await fetch(`${process.env.REACT_APP_API_URL}/curso/rotapaga`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                        'authorization': `Bearer ${token}`
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setIdCurso(data[0].routerPrivadeCurso)
                       
                        

                    })

            } catch (error) {
                console.log(error)



            }

        }

        handleFotoId();
    }, [])


    const handlerouterAulas = async () => {

        
        try {

            const verifycurso = 'notApovade'
           await localStorage.setItem('curso', verifycurso)

            const verify = await localStorage.getItem('curso') 

            if(!verify === 'notApovade'){
                Swal.fire({
                    title: 'Sem Acesso!',
                    text: 'Compre o curso para ter acesso as aulas!',
                    showCancelButton: true,
                    confirmButtonColor: 'green',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Comprar Curso!',
                    imageUrl: ImgCurso,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/perfil/curso/aulas/check`)

                    }
                })
               } else{

                navigate(`/perfil/curso/aulas/check`)


               }

            await fetch(`${process.env.REACT_APP_API_URL}/curso/rotapaga`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(async data => {
                    console.log(data)
                    setIdCurso(data[0].routerPrivadeCurso)


                    if (idCurso === data[0].routerPrivadeCurso) {

                        await localStorage.setItem('curso', 'Aprovade')

                        return navigate(`/perfil/aulas/${idCurso}/preparativo/${iduser}`)


                    } 
                
                            
                     })

                   
                        
                    } catch (error) {

                        console.log(error)
                    }
                }
                    


                    

    return (
        <div className="aulas">

            <div className='barra-fixed'>

                <div className='barra-alta-home'>
                    <div className='Logo-alta'><img src={Logo} /></div>
                    <Link to='/home'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></div></Link>
                </div>
            </div>

            <Perfil />

            <div className='menu-aulas'>
                <b>Cursos</b>

                <div onClick={handlerouterAulas} className='aulas-container'>

                    <div>
                        <div className='aula-play'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg></div>
                        <div className='aula-description'>
                            <h5>Progamação para iniciantes</h5>
                            <p>Nesse curso voçe aprendera os fundametos da progamção!</p>
                        </div>

                    </div>



                </div>
            </div>

            <MenuBaixo />


        </div>
    );
}

export default AulasPagas;
