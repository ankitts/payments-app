import { useState, useEffect } from "react";
import axios from "axios";

export default function Balance() {
  const [balanceAmount, setBalanceAmount] = useState("");

  async function getBalanceAmount(){
    const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    setBalanceAmount(response.data.balance);
  }

  useEffect(()=>{
    getBalanceAmount()
  }, [])

  return (
    <div className="flex text-lg mt-2 ml-4">
        <div className="font-semibold">
            Your Balance is: 
        </div>
        <div className="font-bold ml-2">
            Rs {balanceAmount}
        </div>
    </div>
  )
}
