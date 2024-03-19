import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

export default function SendMoney() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80  h-max rounded-lg p-4 text-center">
                <Heading label="Send Money" />
                <div className="flex mt-10">
                    <div className="rounded-full bg-black h-12 w-12 flex justify-center">
                        <div className="flex flex-col justify-center font-semibold text-white">
                            H
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-4">
                        <div className="text-lg font-semibold">
                            Harkirat Singh
                        </div>
                    </div>
                </div>
                <div className="pt-2 text-left font-medium">
                    Amount (in Rs)
                </div>
                <div className="pt-1">
                    <input type="text" placeholder="Enter Amount" className="border border-slate-200 w-full h-10 rounded-md px-3 py-2 text-sm"/>
                </div>
                <div className="py-2">
                    <button className="bg-black w-full rounded-md px-2 py-1 text-white hover:text-green-500 text-lg font-semibold">
                        Initiate Transfer
                    </button>
                </div>
                <div className="">
                    <Link className="w-full px-2 py-1 text-black hover:text-red-500 text-lg font-semibold" to="/dashboard">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
