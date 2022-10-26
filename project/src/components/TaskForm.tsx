import React from "react";
import styles from './Header.module.css'

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <form>
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" />
            </div>
            <div>
                <label htmlFor="title">Dificuldade:</label>
                <input type="text" name="title" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm