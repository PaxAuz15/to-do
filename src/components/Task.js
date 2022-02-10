import { useState } from "react"
import "../index.css"

export const Task = ({nameTask}) => {

    const [done, setDone] = useState(false)
    
    function handleClick() {
        setDone(!done)
    }
    

    return(
        <div className="task">
            <span>{nameTask}</span>
            <button onClick={handleClick} className={done ? "done" : "not-finished"}>{done ? "✔" : "❌"}</button>
        </div>
    )
}