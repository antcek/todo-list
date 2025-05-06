import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../features/todos/todosSlice";
import "../styles/TodoFilter.css";

export enum FilterType {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

const TodoFilter: React.FC = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: FilterType) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="todo-filter">
      <button
        className={`filter-button ${filter === FilterType.ALL ? "active" : ""}`}
        onClick={() => handleFilterChange(FilterType.ALL)}
      >
        Все
      </button>
      <button
        className={`filter-button ${filter === FilterType.ACTIVE ? "active" : ""}`}
        onClick={() => handleFilterChange(FilterType.ACTIVE)}
      >
        Активные
      </button>
      <button
        className={`filter-button ${filter === FilterType.COMPLETED ? "active" : ""}`}
        onClick={() => handleFilterChange(FilterType.COMPLETED)}
      >
        Завершённые
      </button>
    </div>
  );
};

export default TodoFilter;
