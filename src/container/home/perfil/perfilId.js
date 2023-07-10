import { Link } from 'react-router-dom';
import './perfil-modules.css'
import LogoAmrelo from '../../../img/LogoTutu.png'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import MenuBaixo from '../navbar/menuBaixo';



function PerfilId() {

   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')
    const token = localStorage.getItem('token')
    const IdDados = localStorage.getItem('IdDados')


    useEffect(() =>{ 
    const handleDadosId = async () =>{

        try {

             await fetch(`${process.env.REACT_APP_API_URL}/Dados/${IdDados}`,{
                method:'GET',
                headers:{
                    'Content-Type':'aplication/json',
                    'authorization':`Bearer ${token}`
                }
             })
             .then(resp => resp.json())
             .then(data =>{
                setName(data.Dadoss.name)
                setEmail(data.Dadoss.user[0].email)
                setSexo(data.Dadoss.sexo)
                setTelefone(data.Dadoss.telefone)
                setIdade(data.Dadoss.idade)
                setCidade(data.Dadoss.cidade)
                console.log(data)
             })

        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleDadosId();
},[])


useEffect(() =>{ 
    const handleFotoId = async () =>{

        try {

             await fetch(`${process.env.REACT_APP_API_URL}/upload/post`,{
                method:'GET',
                headers:{
                    'Content-Type':'aplication/json',
                    'authorization':`Bearer ${token}`
                }
             })
             .then(resp => resp.json())
             .then(data =>{
                setFoto(data.posts[0].url)
                console.log(data)

             })

        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleFotoId();
},[])



    return (
        <div className="perfilId">
            <div className='barra-fixed'> 
            <div className='barra-alta-home'>
            <div className='Logo-alta'><img src={LogoAmrelo} /></div>
            <Link to='/home'> <div className='Logo-volta'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></div></Link>

            </div>
            </div>
           

            <div className='imageId'><img src={foto} /></div>


            <div className='dadosUser'>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">E-mail</div>
                           {email}
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Nome</div>
                            {name}
                        </div>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Sexo</div>
                            {sexo}
                            
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Idade</div>
                            {idade}
                            
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Telefone</div>
                            {telefone}
                            
                        </div>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Cidade</div>
                            {cidade}
                           
                        </div>

                    </ListGroup.Item>

                </ListGroup>

            </div>



            <MenuBaixo />

        </div>
    );
}

export default PerfilId;
