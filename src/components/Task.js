import "../index.css"

export const Task = ({nameTask}) => {
    return(
        <div className="task">
            <span>{nameTask}</span>
            <span>✔</span>
        </div>
    )
}