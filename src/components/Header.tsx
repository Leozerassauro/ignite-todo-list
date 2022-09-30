import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./Header.module.css";
import todoLogo from "../assets/logo.svg";
import { PlusCircle } from "phosphor-react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const isNewTitleEmpty = title.length === 0;

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo da Todo List" />

      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          type="text"
          value={title}
          placeholder="Adicione uma nova tarefa"
          onChange={onTaskChange}
        />
        <button disabled={isNewTitleEmpty}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </header>
  );
}
