import React, { useState } from 'react'

import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

interface Props {
  message: string
  isOpen: boolean
}

export default function MessageSnackbar({ message, isOpen }: Props) {
  const [open, setOpen] = useState(isOpen)

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
