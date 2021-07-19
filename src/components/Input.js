import React from 'react'

const input = (props) => {
    const { list, setList } = props;
    let task = {
        name: "",
        inComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    };

    const onClick = e => {
        setList([...list, task])
        e.target.value="";
    }

    return (
        <div className="container w-50 mt-3">
            <input className="form-control" onChange={onChange} type="text" name="task"/>
            <button className="btn btn-primary btn-block mt-1" onClick={onClick}>Add</button>
        </div>
    )
}

export default input
