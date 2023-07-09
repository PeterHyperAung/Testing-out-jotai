import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Checkbox,
} from "@mui/material";

import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { deleteTodoAtom, toggleDoneTodosAtom } from "../store";
import OpenModalButton from "./OpenModalButton";

import type { Todo as TodoType } from "../store";
import { useSetAtom } from "jotai";

export default function Todo({ todos }: { todos: TodoType[] }) {
  const toggleDone = useSetAtom(toggleDoneTodosAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);

  return (
    <Box maxWidth="1200px" mx="auto" my="20px">
      <List>
        {todos.map((todo: TodoType) => (
          <ListItem
            sx={{
              backgroundColor: todo.done ? "#eee" : "white",
              borderRadius: 1,
              marginBottom: 1,
            }}
            key={todo.id}
            secondaryAction={
              <>
                <OpenModalButton>
                  <EditIcon />
                </OpenModalButton>

                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo({ id: todo.id })}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Checkbox
                onChange={() => toggleDone({ id: todo.id })}
                checked={todo.done}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
              primary={todo.title}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
