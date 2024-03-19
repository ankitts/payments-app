import Button from "./Button"

export default function Users() {
  return (
    <div className="ml-4 mr-4">
        <div className="mt-6 font-bold text-lg">
            Users
        </div>
        <div className="mt-2">
            <input type="text" placeholder="Search users..." className="rounded-lg border border-slate-300 w-full px-2 py-1"/>
        </div>
        <div>
            <User />
        </div>
        <div>
            <User />
        </div>
        <div>
            <User />
        </div>
        <div>
            <User />
        </div>
    </div>
  )
}

function User() {
    return(
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2">
                    <div className="flex flex-col justify-center">
                        H
                    </div>
                </div>
                <div className="ml-2 flex flex-col justify-center h-full">
                    <div>
                        Harkirat Singh
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button buttontext="Send Money" to="/send"/>
            </div>
        </div>
    )
}
