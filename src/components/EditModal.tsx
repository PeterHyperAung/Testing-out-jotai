import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAtom } from "jotai";
import { modalStateAtom, mondalInputAtom } from "../store";
import { Edit as EditIcon } from "@mui/icons-material";

export default function EditModal() {
  const [open, setOpen] = useAtom(modalStateAtom);
  const [data, setData] = useAtom(mondalInputAtom);
  console.log(open);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <EditIcon fontSize="12px" /> Edit
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update your todo which has the title "" here!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New title"
            type="email"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
