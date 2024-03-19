import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"

function Signin() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max rounded-lg p-4 text-center">
          <Heading label="Sign In" />
          <Subheading label="Login using your credentials" />
          <InputBox label="E-mail" placeholder="john@example.com"/>
          <InputBox label="Password" placeholder="John@123" />
          <Button buttontext="Sign In"/>
          <BottomWarning label="Don't have an account?" buttontext="Create one!" to="/"/>
        </div>
      </div>
    </div>
  )
}

export default Signin