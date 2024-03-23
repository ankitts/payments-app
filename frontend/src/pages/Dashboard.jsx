import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

export default function Dashboard() {
  // const [balanceAmount, setBalanceAmount] = useState("");

  // async function getBalanceAmount(){
  //   const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token")
  //     }
  //   })
  //   console.log(response);
  //   setBalanceAmount(response.data.balance);
  // }

  // useEffect(()=>{
  //   getBalanceAmount()
  // }, [])

  return (
    <div>
        <Appbar />
        <Balance />
        <Users />
    </div>
  )
}
