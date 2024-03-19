import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"

function Signup() {
  return (
    <div className="flex bg-slate-300 h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max rounded-lg text-center p-4">
          <Heading label="Sign Up" />
          <Subheading label="Enter your information to create your account" />
          <InputBox label="First Name" placeholder="John" />
          <InputBox label="Last Name" placeholder="Wick" />
          <InputBox label="Email" placeholder="john@example.com" />
          <InputBox label="Password" placeholder="John@123" />
          <Button buttontext="Sign Up" />
          <BottomWarning label="Already have an Account?" buttontext="Sign In" to="/login"/>
        </div>
      </div>
    </div>

  )
}

export default Signup