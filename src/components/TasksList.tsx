import styles from "./TasksList.module.css";
import { TaskInterface } from "../App";

import { Trash, Check } from "phosphor-react";
import { useState } from "react";

interface Props {
  task: TaskInterface;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({ task, onComplete, onDelete }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.listContent}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((check) => !check)}
        onClick={() => onComplete(task.id)}
      />
      <span className={isChecked ? styles.checked : ''}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>
        <Trash size={14} />
      </button>
    </div>
  );
}
