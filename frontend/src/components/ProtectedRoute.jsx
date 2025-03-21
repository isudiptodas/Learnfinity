import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading';

function ProtectedRoute({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const validate = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setIsAuthenticated(false);
                navigate("/login");
                return;
            }

            setIsAuthenticated(true);

            // try {

            //     // const res = await axios.get("https://learnfinity-mzah.onrender.com/auth/protected", {
            //     //     headers: {
            //     //         Authorization: `Bearer ${token}`,
            //     //     },
            //     // });

            //     // if (res.status === 200) {
            //     //     setIsAuthenticated(true);
            //     // }
            // }
            // catch (err) {
            //     console.error(err.message);
            //     setIsAuthenticated(false);
            //     navigate("/login");
            // }
        };

        validate();
    }, [navigate]);


    return (
        <>
           {isAuthenticated === null && <Loading/>}
           {isAuthenticated === false && null}
           {isAuthenticated === true && children}
        </>
    )
}

export default ProtectedRoute
