import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, reorderTodos } from "../features/todos/todosSlice";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(reorderTodos({ sourceIndex: dragIndex, destinationIndex: hoverIndex }));
    },
    [dispatch],
  );

  if (todos.length === 0) {
    return <div className="empty-list">Нет новых задач ;(</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} moveItem={moveItem} />
      ))}
    </ul>
  );
};

export default TodoList;
