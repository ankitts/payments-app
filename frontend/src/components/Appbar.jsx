import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Appbar() {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate()

    async function getCurrentUser(){
        const response = await axios.get("http://localhost:3000/api/v1/user/currentUser", {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        console.log(response.data.currentUser);
        setCurrentUser(response.data.currentUser);
    }

    useEffect(()=>{
        getCurrentUser();
    }, [])

    return (
        <div className="shadow flex h-14 justify-between">
            <div className="flex flex-col justify-center ml-4 h-full text-lg">
                Payments App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center mr-4 text-red-600">
                    <button onClick={()=>{
                        if (confirm('Are you sure, you want to logout?')){
                            localStorage.clear();
                            navigate('/login');
                        }
                        
                    }}>Logout</button>
                </div>
                <div className="flex flex-col justify-center mr-4">
                    {currentUser.firstName? currentUser.firstName + " " + currentUser.lastName : "User"}
                </div>
                <div className="rounded-full bg-slate-200 h-12 w-12 flex justify-center mt-1 mr-4">
                    <div className="flex flex-col justify-center h-full text-xl font-medium">
                       {currentUser.firstName? currentUser.firstName[0].toUpperCase(): "U"}
                    </div>
                </div>
            </div>
        </div>
    )
}
