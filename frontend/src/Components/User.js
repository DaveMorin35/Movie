import { useEffect, useState } from "react";


const User = ({token}) => {
    const [user, setUser] = useState("");

    useEffect(() => {
      const fetchUserInfo = () => {
        fetch("http://localhost:8080/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        })
          .then(response => {
            return response.text();
          })
        
          .then(data => {
            setUser(data)
            console.log("User info:", data);
          })
          .catch(error => {
            console.error("Error fetching user info", error);
          });
      };
  
      fetchUserInfo();
    }, [token]);

    return (
<>

</>
    )
}

export default User;