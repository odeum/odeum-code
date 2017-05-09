import React, { Component } from 'react';

class TaskList extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                TaskList <br/>
                <button onClick={e=>{
                    e.preventDefault()
                    this.props.addTab({label:'Task', location:'/tasks/task', icon:'generelt'})
                    }
                    }>Add Task </button>
            </div>
        );
    }
}

export default TaskList;