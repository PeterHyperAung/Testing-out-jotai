import { Box, TextField, Button } from "@mui/material";
import { inputAtom } from "../store";
import { useAtom } from "jotai";
import useAddTodo from "../hooks/useAddTodo";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [data, setData] = useAtom(inputAtom);
  const addTodo = useAddTodo();

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        display: "flex",
        gap: 1,
      }}
      mx="auto"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ id: uuidv4(), title: data, done: false });
        }}
        style={{ flex: 1 }}
      >
        <TextField
          id="outlined-basic"
          label="Type your todo here"
          variant="outlined"
          value={data}
          onChange={(e) => setData(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
      </form>
      <Button
        variant="contained"
        onClick={() => addTodo({ id: uuidv4(), title: data, done: false })}
      >
        Add Todo
      </Button>
    </Box>
  );
}
