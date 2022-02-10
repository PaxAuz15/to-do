import "../index.css"

export const Task = ({nameTask}) => {
    return(
        <div className="task">
            <span>{nameTask}</span>
            <button className="button">✔</button>
        </div>
    )
}