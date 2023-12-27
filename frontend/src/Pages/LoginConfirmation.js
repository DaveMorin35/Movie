import React, { useEffect, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom"
import User from "../Components/User";



export default function LoginConfirmation(){
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username;
    const {state} = location;
    const [showUsername, setShowUsername] = useState(!!username);
   

    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
            navigate("/movies", {state: {username, showUsername:!!username}});
        }, delay);
        return () => clearTimeout(timeoutId);
    }, [navigate, username]);

    return (
        <>
<div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2.5 min-h-screen flex flex-col items-center">
   <div className="flex flex-grow flex-col justify-center items-center">
    <p className="text-4xl text-neutral-400">Welcome {username} !</p>
    <User token={state?.token} />
   </div>
</div>
</>
    )
}