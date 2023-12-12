import {useState} from "react";


export function Login({handleCloseForm, setLoginName, setShowLoginName, setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginError, setShowLoginError] = useState(false);
 

    const onRegisterFormSubmit = (event) => {
        event.preventDefault();

        const bodyData = {
            username: username,
            password: password
        }

        fetch("http://localhost:8080/session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData),

        }).then(response => response.json())
            .then(data => {
                if (data) {
                    console.log("Login successfully")
                    setLoginName(bodyData.username)
                    setShowLoginName(true)
                    handleCloseForm()
                    setToken(data)
                } 
                else {
                    console.log("Login failed")
                    setShowLoginError(true)
                }
            })
            .catch(error => console.error("Error logging in:", error));
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-950 to-blue-800">
            <div className=" bg-neutral-200 pb-8 w-96 rounded-lg shadow-lg shadow-neutral-100">
                <div className="flex justify-end mr-3.5 mt-3.5 font-bold text-xl cursor-pointer"
                     onClick={handleCloseForm}>X
                </div>
                {showLoginError ?
                <div>
                    <h2>Something is wrong. Please try again</h2>
                </div> : <div></div>
                }
                <div className="submit-container">
                    <div className="" onClick={onRegisterFormSubmit}>Login
                    </div>
                </div>
                <div className="flex flex-col place-items-center mt-8 ">
                    <div className="text-3xl text-neutral-400"></div>
                    <div className="flex place-items-center ">
                        <div
                            className="w-16 h-1.5 bg-blue-600 border-2 bg-gradient-to-r from-blue-950 to-blue-800"></div>
                    </div>
                    <div>
                        <input type="text" placeholder="Name"
                               className="mt-6 flex flex-col gap-3 border-none outline-none bg-gray-300 h-12 w-80 rounded-lg pl-2.5"
                               onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <input type="password" placeholder="Password"
                               className="mt-6 flex flex-col gap-3 border-none outline-none bg-gray-300 h-12 w-80 rounded-lg pl-2.5"
                               onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="mt-3.5 ml-10 text-xs">Lost Password? <span
                        className="cursor-pointer text-blue-800">Click Here!</span></div>
                    <div className="flex mt-8 rounded-2xl bg-gradient-to-r from-blue-950 to-blue-800">
                        <button className="flex  p-2 w-32 justify-center text-white"
                                onClick={onRegisterFormSubmit}>Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;