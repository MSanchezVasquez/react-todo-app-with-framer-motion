import { TodoItem } from "../components/TodoItem";
// IMPORTANTE: Necesitarás importar el Provider de tu contexto aquí
import { TodoProvider } from "../TodoProvider";
import { reducer } from "../stores/reducer";

const mockInitialState = {
  todos: [],
  visibilityFilter: "All",
};

export default {
  title: "Componentes/TodoItem", // Así se organizará en la barra lateral
  component: TodoItem,
  tags: ["autodocs"], // Genera documentación automática
  // Los decorators envuelven tu componente en un contenedor.
  // Aquí es donde "engañamos" al componente dándole su contexto.
  decorators: [
    (Story) => (
      <TodoProvider initialState={mockInitialState} reducer={reducer}>
        <section className="todoapp">
          <ul className="todo-list">
            <Story />
          </ul>
        </section>
      </TodoProvider>
    ),
  ],
};

// 1. Estado por defecto (Tarea pendiente)
export const Pendiente = {
  args: {
    index: 0,
    todo: {
      id: "1",
      text: "Practicar pronunciación de L y R",
      completed: false,
    },
  },
};

// 2. Estado completado
export const Completado = {
  args: {
    index: 1,
    todo: {
      id: "2",
      text: "Configurar Storybook con Vite",
      completed: true,
    },
  },
};
