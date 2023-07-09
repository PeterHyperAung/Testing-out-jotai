import { useAtom } from "jotai";
import { Todo, todosAtom, inputAtom } from "../store";

export default function useAddTodo() {
  const [, setTodos] = useAtom(todosAtom);
  const [, setInput] = useAtom(inputAtom);

  return (cur: Todo) => {
    setInput("");
    setTodos((prev: Todo[]) => [...prev, cur]);
  };
}
