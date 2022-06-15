import React from 'react'
import { ITask } from '../interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
    <div>{task.taskName} {task.taskDeadline} <button onClick={()=>completeTask(task.taskName)}>X</button></div>

  )
}

export default TodoTask