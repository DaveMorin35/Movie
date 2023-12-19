import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            const response = await fetch("http://localhost:8080/abmelden", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                console.log("Logout successful");
                navigate("/movies");
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    logoutUser();

   return (
    <>
    
    </>
   )

}

export default Logout;