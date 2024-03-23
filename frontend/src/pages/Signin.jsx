import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max rounded-lg p-4 text-center">
          <Heading label="Sign In" />
          <Subheading label="Login using your credentials" />
          <InputBox onChange={e => setUsername(e.target.value)} label="E-mail" placeholder="john@example.com"/>
          <InputBox onChange={e => setPassword(e.target.value)} label="Password" placeholder="John@123" />
          <Button onClick={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              username,
              password
            })
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard')
          }} buttontext="Sign In"/>
          <BottomWarning label="Don't have an account?" buttontext="Create one!" to="/"/>
        </div>
      </div>
    </div>  
  )
}

export default Signin