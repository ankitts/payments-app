function InputBox({onChange, label, placeholder }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={e=>onChange(e)} type="text" placeholder={placeholder} className="w-full rounded px-2 py-1 border border-slate-300" />
    </div>
  )
}

export default InputBox