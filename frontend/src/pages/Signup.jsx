import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-300 h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max rounded-lg text-center p-4">
          <Heading label="Sign Up" />
          <Subheading label="Enter your information to create your account" />
          <InputBox onChange={e=>setFirstName(e.target.value)} label="First Name" placeholder="John" />
          <InputBox onChange={e=>setLastName(e.target.value)} label="Last Name" placeholder="Wick" />
          <InputBox onChange={e=>setUsername(e.target.value)}  label="Email" placeholder="john@example.com" />
          <InputBox onChange={e=>setPassword(e.target.value)} label="Password" placeholder="John@123" />
          <Button onClick={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            })
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard')
          }} buttontext="Sign Up" />
          <BottomWarning label="Already have an Account?" buttontext="Sign In" to="/login"/>
        </div>
      </div>
    </div>

  )
}

export default Signup