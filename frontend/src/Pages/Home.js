import { Link } from "react-router-dom"


export default function Home(){

    return (
        <>
<div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2.5 min-h-screen flex flex-col items-center">
    <div className="flex justify-center text-4xl pt-2.5 uppercase text-neutral-400 font-bold">
    <h2>Welcome</h2>
    </div>
    <div className="flex flex-grow flex-col justify-center items-center text-4xl">
    <Link to="/movies">Enter</Link>
    </div>
</div>
</>
    )
}