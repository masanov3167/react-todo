const TodoItem = ({id,forId,title,dataset,delfunc,checkedt,isCompleted})=>{
    return (
        <li className="list-item">
            <input id={id} type="checkbox" checked={isCompleted} onChange={checkedt} data-todo-id={dataset} />
            <label className={isCompleted && "completed"} htmlFor={forId}>{title}</label>
            <span className="del" data-todo-id={dataset} onClick={delfunc}></span>
        </li>
    )
}

export default TodoItem;