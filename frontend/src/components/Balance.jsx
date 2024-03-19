export default function Balance({amount}) {
  return (
    <div className="flex text-lg mt-2 ml-4">
        <div className="font-semibold">
            Your Balance is: 
        </div>
        <div className="font-bold ml-2">
            Rs {amount}
        </div>
    </div>
  )
}
