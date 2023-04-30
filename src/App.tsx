
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Clipboard, PlusCircle } from "@phosphor-icons/react";

import ClipboardImage from './assets/Clipboard.png';
import { Header, Task } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <main>
        <div className="wrapper flex flex-col gap-16">
          <form className="h-[54px] flex items-center gap-2 -mt-6">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="h-full w-full bg-base-500 shadow-md px-4 rounded-lg text-base font-normal text-base-100 placeholder:text-base-300"
            />
            <button
              type="submit"
              className="h-full bg-product-blue-dark shadow-md px-4 rounded-lg text-base font-bold text-base-200 flex items-center gap-2 hover:bg-product-blue hover:text-base-100 transition-all"
            >
              Criar <PlusCircle size={16} />
            </button>
          </form>

          <section>
            <div className='flex flex-col gap-6'>
              <header className="flex justify-between">
                <div className="flex items-center gap-2">
                  <strong className="text-product-blue text-sm font-bold">
                    Tarefas criadas
                  </strong>
                  <span className="py-1 px-2 text-base-200 text-xs font-bold bg-base-400 flex rounded-full">
                      0
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <strong className="text-product-purple text-sm font-bold">
                    Concluídas
                  </strong>
                  <span className="py-1 px-2 text-base-200 text-xs font-bold bg-base-400 flex rounded-full">
                    0
                  </span>
                </div>
              </header>

              <div className='flex flex-col gap-3 overflow-auto h-64'>
                {
                  tasks.map((task) => {
                    return <Task content='Comer Macarrão' />
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

{/* <div className='flex flex-col gap-3 overflow-auto h-64'>
  <Task 
    content='Comer Macarrão'
  />
</div> */}

{/* <div className="flex flex-col items-center gap-4 border-t border-t-base-400 pt-16">
  <img src={ClipboardImage} />

  <p className='flex flex-col text-center text-base text-base-300'>
    <strong className='font-bold'>Você ainda não tem tarefas cadastradas</strong>
    <span className='font-normal'>Crie tarefas e organize seus itens a fazer</span>
  </p>
</div> */}