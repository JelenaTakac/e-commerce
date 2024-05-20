import { ReactComponent as Refres } from "../../assets/Refresh.svg"

const Error = () => {
  return (
    <div className="text-center p-12">
        <h1>Something went wrong...</h1>
        <div className="mt-12 flex justify-center">
            <Refres className="w-16 h-1/4 "/>
        </div>
    </div>
  )
}

export default Error