export default function Button({buttontext}) {
  return (
    <button className="w-full bg-black hover:bg-gray-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2">
        {buttontext}
    </button>
  )
}
