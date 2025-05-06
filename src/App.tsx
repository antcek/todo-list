import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TodoForm from "./components/TodoForm";
import "./styles/App.css";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <header>
          <h1>TODO LIST</h1>
        </header>
        <main>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </main>
        <footer>Футер</footer>
      </div>
    </DndProvider>
  );
};

export default App;
