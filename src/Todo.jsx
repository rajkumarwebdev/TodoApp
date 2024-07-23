import React from 'react'
import { TodoItem } from './TodoItem'
export const Todo = () => {
  return (
    <div>
        <TodoItem content={"This is my new task"} time={"10:30"} subject="Meeting" completed={true}/>
    </div>
  )
}
