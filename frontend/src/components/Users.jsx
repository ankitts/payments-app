import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");


  async function fetchUsers(){
    const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter);
    setUsers(response.data.user);
  }

  useEffect(()=>{
    fetchUsers();
  }, [filter])

  return (
    <div className="ml-4 mr-4">
        <div className="mt-6 font-bold text-lg">
            Users
        </div>
        <div className="mt-2">
            <input type="text" 
                onChange={(e)=>{
                    setFilter(e.target.value);
                }}
                placeholder="Search users..." className="rounded-lg border border-slate-300 w-full px-2 py-1"
            />
        </div>
        {users.map((user) => (
                <div key={user._id}>
                    <User name={user.firstName + " " + user.lastName} user={user}/>
                </div>
            ))}
    </div>
  )
}

function User({name, user}) {
    const navigate = useNavigate();

    return(
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2">
                    <div className="flex flex-col justify-center">
                        {name[0].toUpperCase()}
                    </div>
                </div>
                <div className="ml-2 flex flex-col justify-center h-full">
                    <div>
                        {name}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onClick={()=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstName)
                }} buttontext="Send Money" />
            </div>
        </div>
    )
}
