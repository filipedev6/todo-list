import { Trash, CheckCircle, Circle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { TaskApp } from "../App";

interface Task {
    id: string
    onCheckedTask: (id: string) => void
    onDeleteTask: (id: string) => void
    content: string
    isCompleted: boolean
}

export function Task({ content, onCheckedTask, id, onDeleteTask, isCompleted}: Task) {
    const [completed, setCompleted] = useState(isCompleted);

    function handleCheckedTask() {
        setCompleted(!completed);
        onCheckedTask(id);
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    return (
        <div className="bg-base-500 px-4 py-4 flex items-center justify-between gap-3 rounded-lg border border-base-400">
            {/* <input type="checkbox" onChange={handleCheckedTask} /> */}
            <button onClick={handleCheckedTask}>
                {completed ? <CheckCircle color="#5E60CE" size={22} weight="fill"/> : <Circle color="#4EA8DE" size={22} weight="regular"/>}
            </button>

            {
                !completed ? (
                    <p className='text-sm font-normal text-base-100 leading-none select-none break-all'>
                        {content}
                    </p>
                ) : (
                    <s className='text-sm font-normal text-base-300 leading-none select-none break-all'>
                        {content}
                    </s>
                )
            }

            <button onClick={handleDeleteTask} className="hover:bg-base-400 hover:text-red-400 p-1 rounded text-base-300 transition-all">
                <Trash size={24} color="currentColor"/>
            </button>
        </div>
    )
}