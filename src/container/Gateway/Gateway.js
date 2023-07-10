import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




function Gateway() {

    const token = localStorage.getItem('token')

    const navigate = useNavigate()


    const [paid, setPaid] = useState(false)
    const [loading, setLoading] = useState(false)



    return (
        <>
            <div className="gateway">

            <a href='${process.env.REACT_APP_API_URL}/pagamento'><button>comprar</button></a> 

            </div>
        </>
    );
}

export default Gateway;
