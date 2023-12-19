import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"



export default function RegisterConfirmation(){
    const navigate = useNavigate();

    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
            navigate("/movies");
        }, delay);
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <>
<div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2.5 min-h-screen flex flex-col items-center">
   <div className="flex flex-grow flex-col justify-center items-center">
    <p className="text-4xl text-neutral-400">Registration successfully!</p>
   </div>
</div>
</>
    )
}