import { useAtomValue } from "jotai";
import {
  filterAtom,
  todosAtom,
  doneTodosAtom,
  undoneTodosAtom,
} from "../store";

export default function useGetFilterAtom() {
  const filterBy = useAtomValue(filterAtom);
  if (filterBy === "done") return doneTodosAtom;
  else if (filterBy === "undone") return undoneTodosAtom;
  else return todosAtom;
}
