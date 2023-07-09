import { atom } from "jotai";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export type FilterOptions = null | "done" | "undone";

export const modalStateAtom = atom<boolean>(false);
export const mondalInputAtom = atom<string>("");
export const updateSelectedTodoAtom = atom(
  (get) => get(todosAtom).find((el) => el.id === get(selectTodoAtom)),
  (get, set) => {
    set(
      todosAtom,
      get(todosAtom).map((todo) => {
        if (todo.id === get(selectTodoAtom)) {
          todo.title = get(mondalInputAtom);
        }
        return todo;
      })
    );
  }
);
export const selectTodoAtom = atom<string>("");

export const inputAtom = atom<string>("");

export const filterAtom = atom<FilterOptions>(null);

export const todosAtom = atom<Todo[]>([
  {
    id: "1",
    title: "One",
    done: true,
  },
  {
    id: "2",
    title: "Two",
    done: false,
  },
  {
    id: "3",
    title: "Three",
    done: false,
  },
]);

export const toggleDoneTodosAtom = atom(
  null,
  (get, set, update: { id: string }) => {
    set(
      todosAtom,
      get(todosAtom).map((todo) => {
        if (todo.id === update.id) {
          todo.done = !todo.done;
        }

        return todo;
      })
    );
  }
);
export const deleteTodoAtom = atom(null, (get, set, update: { id: string }) => {
  set(
    todosAtom,
    get(todosAtom).filter((todo) => {
      if (todo.id !== update.id) return todo;
    })
  );
});

export const doneTodosAtom = atom<Todo[]>((get) => {
  return get(todosAtom).filter((el) => el.done);
});

export const undoneTodosAtom = atom<Todo[]>((get) => {
  return get(todosAtom).filter((el) => !el.done);
});
