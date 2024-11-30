import { Link } from 'react-router-dom';
import './perfil-modules.css'
import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';


function Perfil() {

  const [foto, setFoto] = useState('')
  const [Nome, setNome] = useState('')

  const token = localStorage.getItem('token')


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
             })

        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleFotoId();
},[])





const [dadosSonho, setDadosSonho ] = useState(['']);
const [dadosSonhoMedio, setDadosSonhoMedio ] = useState(['']);
const [dadosSonhoLongo, setDadosSonhoLongo ] = useState(['']);

const [ponto1, setPonto1] = useState([0]);
const [ponto2, setPonto2] = useState([0]);
const [ponto3, setPonto3] = useState([0]);
const [ponto5, setPonto5] = useState(0);


useEffect(() =>{ 
    const handleFotoId = async () =>{
  
        try {
  
             await fetch(`${process.env.REACT_APP_API_URL}/dados/dados`,{
                method:'GET',
                headers:{
                    'Content-Type':'aplication/json',
                    'authorization':`Bearer ${token}`
                }
             })
             .then(resp => resp.json())
             .then(data =>{
                setNome(data[0].name)
                localStorage.setItem('IdDados', data[0]._id)
                localStorage.setItem('pontoHome', 20)
                
               
             })
  
        } catch (error) {
            console.log(error)
  
  
            
        }
        
    }
  
    handleFotoId();
  },[])
  



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonho`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setPonto1(data.data[0].ponto)
            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonhoLongo`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setDadosSonhoLongo(data.data)
                setPonto2(data.data[0].ponto)

            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])



useEffect(() => {

const loadTarefas = async () => {

    try {

        await axios.get(`${process.env.REACT_APP_API_URL}/sonhoMedio`, {

            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${token}`
            }

        })
            .then(data => {
                setPonto3(data.data[0].ponto)

            })

    } catch (error) {

        console.log(error)

    }

}

loadTarefas();

}, [])


const [tarefasPonto, setTarefaPonto] = useState([0])

useEffect(() => {
    const handleFotoId = async () => {

        try {

            await fetch(`${process.env.REACT_APP_API_URL}/tarefa`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json',
                    'authorization':`Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setTarefaPonto(data[0].ponto)
                    console.log('tela', - data[0].ponto)
                })

        } catch (error) {
            console.log(error)



        }

    }

    handleFotoId();
}, [])

const IdUser = localStorage.getItem('IdUser');



 const pontuacao = localStorage.getItem('PontoQuiz') 

 localStorage.setItem('PontoSonho1', ponto1 || 20)
 localStorage.setItem('PontoSonho2', ponto2 || 20)
 localStorage.setItem('PontoSonho3', ponto3 || 20)
 localStorage.setItem('PontoSonho4', tarefasPonto || 20)
 
 
 const Pontos1 = localStorage.getItem('PontoSonho1')
 const Pontos2 = localStorage.getItem('PontoSonho2')
 const Pontos3 = localStorage.getItem('PontoSonho3')
 const Pontos4 = localStorage.getItem('PontoSonho4')
 const Pontos5 = localStorage.getItem('pontoHome')

 

 
 const newspontos1 = Number(Pontos1 * 1) 
 const newspontos2 = Number(Pontos2 * 1) 
 const newspontos3 = Number(Pontos3 * 1) 
 const newspontos4 = Number(Pontos4 * 1) 
 const newspontos5 = Number(Pontos5 * 1) 

 

 const ponto =  newspontos1 + newspontos2 + newspontos3 + newspontos4 + newspontos5

 const Result = Number(ponto)

 const now = Result
 

 



  return (
   <Link  to={`/perfil/${IdUser}`}>  <div className="perfil">
     
     <div className='nome'><p> Olá, </p> <br /> <h2>{Nome}</h2></div>

     <p className='nivel-tutu'>Nivel tutu {Nome}:</p>
     <div className='nivel'> <b>1</b>
     <ProgressBar now={now} label={`${now}`} /><b className='level-maximo'>100</b>
     </div> 

     <div className='barra-baixa'></div>




    </div></Link>
  );
}

export default Perfil;
