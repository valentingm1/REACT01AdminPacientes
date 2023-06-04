

const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center uppercase font-bold mb-3 p-3 rounded-md">
          <p>{children}</p>
    </div>
  )
}

export default Error