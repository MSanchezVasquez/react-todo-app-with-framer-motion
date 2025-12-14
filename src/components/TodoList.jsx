import { TodoItem } from "./TodoItem";
import { getFilteredTodos } from "../stores/util";
import { Reorder, AnimatePresence } from "framer-motion";

export const TodoList = ({ todos, visibilityFilter, setTodos }) => {
  const filteredTodos = getFilteredTodos(todos, visibilityFilter);
  const isReorderEnabled = visibilityFilter === "All";

  if (!isReorderEnabled) {
    return (
      <ul className="todo-list">
        <AnimatePresence>
          {filteredTodos.map((todo, index) => (
            <TodoItem key={todo.id} index={index} todo={todo} />
          ))}
        </AnimatePresence>
      </ul>
    );
  }

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
