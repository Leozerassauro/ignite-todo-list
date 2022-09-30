import { ClipboardText } from 'phosphor-react';

import styles from "./Tasks.module.css";

import { TaskInterface } from "../App";
import { TaskList } from "./TasksList";

interface Props {
  tasks: TaskInterface[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{`${completedTasks} de ${tasksQuantity}`}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <ClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
