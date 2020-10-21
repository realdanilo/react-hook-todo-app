import React, { createContext, useReducer } from "react";
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todoReducer";
import { useLocalStorageReduce } from "../hooks/useLocalStorageReduce";
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // const [todos, dispatch] = useReducer(reducer, defaultTodos);
  const [todos, dispatch] = useLocalStorageReduce(
    "todos",
    defaultTodos,
    reducer
  );
  // const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
