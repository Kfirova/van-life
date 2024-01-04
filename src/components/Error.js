import { useAsyncError } from "react-router-dom"

export default function Error(){
    const error = useAsyncError()
   console.log(error)
    return (
       
            <div className="error main">
                <h1 className="error message">Error: {error.message}</h1>
                <pre className="error statusText">{error.status} - {error.statusText}</pre>
            </div>
            
        )
}