import Todo from "./Todo";
import useGetFilterAtom from "../hooks/useGetFilterAtom";
import { useAtomValue } from "jotai";

export default function FilterableTodo() {
  const todos = useAtomValue(useGetFilterAtom());
  return <Todo todos={todos} />;
}
