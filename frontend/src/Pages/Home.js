import { useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

export default function Home() {
    const [showEnter, setShowEnter] = useState(false);
 
    const handleTypingComplete = () => {
        setShowEnter(true);
    };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2.5 min-h-screen flex flex-col items-center h-screen">
        <div className="flex flex-grow flex-col justify-center items-center text-4xl">
            <Typed
            strings={["Welcome to the movies library"]}
            typeSpeed={100}
            showCursor={false}
            onComplete={handleTypingComplete}
            />
            {showEnter && (
            <Link to="/movies" className="uppercase text-4xl pt-2.5 uppercase text-neutral-400 font-bold">
            Click here to enter
            </Link>
            )}
        </div>
      </div>
    </>
  );
}
