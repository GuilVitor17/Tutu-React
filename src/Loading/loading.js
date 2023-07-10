import './loading-modules.css';
import Logo from '../img/LogoTutu.png'
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Loading() {

  const token = localStorage.getItem('token')

  const navigate = useNavigate()


  useEffect(() =>{ 
    const handleLoading = async () =>{

        try {

         let timerInterval
        await  Swal.fire({
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })

          navigate(`/login`)

         
          console.log('carregando')
        } catch (error) {
            console.log(error)


            
        }
        
    }

    handleLoading();
},[])




  return (
    <div className="loading">


      <div><img src={Logo} /></div>


    </div>
  );
}

export default Loading;
