import { Link } from "react-router-dom"

function BottomWarning({label, buttontext, to}) {
  return (
    <div className="flex text-sm font-medium justify-center pb-2">
        <div>
            {label}
        </div>
        <Link className="pl-1 underline pointer cursor-pointer" to={to}>
            {buttontext}
        </Link>
    </div>
  )
}

export default BottomWarning