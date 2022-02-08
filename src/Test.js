import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import OpenTask from './TaskApp/OpenTask';
import { useState } from 'react';
export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [cardId,setCardId] = useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <input type="number" value={cardId} onChange={(e) => setCardId(e.target.value)}/>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <OpenTask
        cardId={cardId}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
