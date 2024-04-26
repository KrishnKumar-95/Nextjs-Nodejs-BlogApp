"use client";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";

export default function MyModal({ children, isOpen, onClose }) {
  return (
    <Dialog fullWidth open={isOpen}>
      <div className="min-h-[220px]" >{children}</div>
    </Dialog>
  );
}

MyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
