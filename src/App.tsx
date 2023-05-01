import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ClipboardImage from "./assets/Clipboard.png";
import { Clipboard, PlusCircle } from "@phosphor-icons/react";
import { Header, Task } from "./components";

export interface TaskApp {
  id: string
  content: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskApp[]>([]);
  const [contentTask, setContentTask] = useState('');
  
  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, {id: uuidv4(), content: contentTask, isCompleted: false}])
    setContentTask('')
  }

  function handleContentTask(event: ChangeEvent<HTMLInputElement>) {
    setContentTask(event.target.value)
  }

  function checkedTask(id: string) {
    const ListUpdatingIsCompleted = tasks.map((task) => {
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    setTasks(ListUpdatingIsCompleted)
  }

  function deleteTask(id: string){
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(taskWithoutDeleteOne)
  }

  const tasksLengthCompleted = tasks.length > 0 ? `${tasks.filter((task) => task.isCompleted === true).length} de ${tasks.length} ` : 0

  return (
    <div>
      <Header />
      <main>
        <div className="wrapper flex flex-col gap-16">
          <form onSubmit={handleCreateNewTask} className="h-[54px] flex items-center gap-2 -mt-6">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="h-full w-full bg-base-500 shadow-md px-4 rounded-lg text-base font-normal text-base-100 placeholder:text-base-300"
              onChange={handleContentTask}
              value={contentTask}
              required
            />
            <button
              disabled={contentTask.length === 0}
              type="submit"
              className="h-full bg-product-blue-dark shadow-md px-4 rounded-lg text-base font-bold text-base-200 flex items-center gap-2 not hover:bg-product-blue hover:text-base-100 transition-all disabled:cursor-not-allowed disabled:opacity-80"
            >
              Criar <PlusCircle size={16} />
            </button>
          </form>

          <section>
            <div className="flex flex-col gap-6">
              <header className="flex justify-between">
                <div className="flex items-center gap-2">
                  <strong className="text-product-blue text-sm font-bold">
                    Tarefas criadas
                  </strong>
                  <span className="py-1 px-2 text-base-200 text-xs font-bold bg-base-400 flex rounded-full">
                    {tasks.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <strong className="text-product-purple text-sm font-bold">
                    Concluídas
                  </strong>
                  <span className="py-1 px-2 text-base-200 text-xs font-bold bg-base-400 flex rounded-full">
                   {tasksLengthCompleted}
                  </span>
                </div>
              </header>

              {tasks.length !== 0 ? (
                <div className="flex flex-col gap-3 min-h-64 pb-6">
                  {tasks.map((task) => {
                    return (
                      <Task 
                        isCompleted={task.isCompleted}
                        key={task.id}
                        id={task.id}
                        content={task.content} 
                        onCheckedTask={checkedTask}
                        onDeleteTask={deleteTask}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 border-t border-t-base-400 pt-16">
                  <img src={ClipboardImage} />

                  <p className="flex flex-col text-center text-base text-base-300">
                    <strong className="font-bold">
                      Você ainda não tem tarefas cadastradas
                    </strong>
                    <span className="font-normal">
                      Crie tarefas e organize seus itens a fazer
                    </span>
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
