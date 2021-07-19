import React from 'react'

const Task = props => {
    const { task, index, list, setList } = props;
    
    const onClick = () => {
            console.log(index);
            const updated = list.filter((task, i) => i !== index);
            console.log(updated);
            setList(updated);

    };

    const onChange = () => {
        list[index].inComplete = !list[index].inComplete;
        setList([...list]);
    }

    return (
        <div className="container bg-secondary">
            <h4>{ task.name }</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" checked={task.inComplete} />
                <button className="btn btn-sm btn-danger" onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Task;
