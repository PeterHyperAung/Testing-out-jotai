import React from "react";
import { modalStateAtom } from "../store";
import { useSetAtom } from "jotai";
import { IconButton } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function OpenModalButton({ children }: Props) {
  const setOpen = useSetAtom(modalStateAtom);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <IconButton edge="end" aria-label="edit" onClick={handleClickOpen}>
      {children}
    </IconButton>
  );
}
