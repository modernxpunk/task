import { Portal, Snackbar, Slide, Alert } from "@mui/material"

const Notification = ({ open, title, onClose, type = "error" }: any) => {
  return (
    <Portal>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        TransitionComponent={props =>
          <Slide {...props} direction="down" />
        }
      >
        <Alert onClose={onClose} severity={type}>
          {title}
        </Alert>
      </Snackbar>
    </Portal>
  )
}

export default Notification