import "../forms/modal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { MouseEventHandler } from "react";

interface Props {
  handleClose: MouseEventHandler<HTMLButtonElement> | undefined;
  open: boolean;
  greeting: string;
  text: string
}

export default function Form({ handleClose, open, greeting, text }: Props) {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h3>{greeting}</h3>
          <p>
            {text}
          </p>
          <button className="modal-button" onClick={handleClose}>Powrót</button>
        </Box>
      </Modal>
    </div>
  );
}
