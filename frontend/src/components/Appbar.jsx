export default function Appbar() {
    return (
        <div className="shadow flex h-14 justify-between">
            <div className="flex flex-col justify-center ml-4 h-full text-lg">
                Payments App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center mr-4">
                    Profile
                </div>
                <div className="rounded-full bg-slate-200 h-12 w-12 flex justify-center mt-1 mr-4">
                    <div className="flex flex-col justify-center h-full text-xl font-medium">
                        A
                    </div>
                </div>
            </div>
        </div>
    )
}
