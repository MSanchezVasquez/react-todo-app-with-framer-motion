import React from "react";
import { TodoItem } from "./TodoItem";
import { getFilteredTodos } from "../stores/util";
import { Reorder, AnimatePresence, motion } from "framer-motion";

export const TodoList = ({ todos, visibilityFilter, setTodos }) => {
  const filteredTodos = getFilteredTodos(todos, visibilityFilter);
  const isReorderEnabled = visibilityFilter === "All";

  // VISTA FILTRADA (Active / Completed)
  if (!isReorderEnabled) {
    return (
      <ul className="todo-list">
        <AnimatePresence>
          {filteredTodos.map((todo, index) => (
            <motion.li
              key={todo.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <TodoItem index={index} todo={todo} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    );
  }

  // VISTA "ALL" (Con Drag & Drop)
  return (
    <Reorder.Group
      className="todo-list"
      axis="y"
      values={todos}
      onReorder={setTodos}
    >
      <AnimatePresence>
        {filteredTodos.map((todo, index) => (
          <Reorder.Item key={todo.id} value={todo}>
            <TodoItem index={index} todo={todo} />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};
