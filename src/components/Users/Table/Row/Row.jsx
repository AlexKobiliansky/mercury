import React, {useState} from 'react';


//Matherial UI
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {connect} from 'react-redux';

import {deleteUser} from '../../../../redux/actions/users';
import UserActivity from "../../UserActivity/UserActivity";
import UserInfo from "../../UserInfo/UserInfo";

const useStyles = makeStyles(() => ({
    menuItem: {
        boxShadow: '0px 0 5px 1px rgba(0,0,0,0.14)',
    },
    icon: {
        fontSize: '30px'
    }
}));

function Row({item, deleteUser}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let classes = useStyles();

    let onDeleteUser = (id) => {
        deleteUser(id);
        handleDialog();
    }

    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
        handleClose();
    };

    return (
        <>
        <tr>
            <td>
                <UserInfo
                    name={item.name}
                    img={item.avatar}
                    post={item.post}
                    online={item.online} />
            </td>
            <td>
                <UserActivity online={item.online} lastVisit={item.lastVisit}/>
            </td>
            <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
            <td><a href={"tel:+" + item.phone.replace(/[^\d]/g, '')}>{item.phone}</a></td>
            <td>
                <IconButton onClick={handleClick} >
                    <MoreVertIcon classes={{root: classes.icon}}/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    disableScrollLock={true}
                    open={open}
                    onClose={handleClose}
                    classes={{paper: classes.menuItem}}
                >
                    <MenuItem onClick={handleDialog}>Delete User</MenuItem>
                </Menu>
            </td>
        </tr>

        <Dialog
            open={openDialog}
            onClose={handleDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete user {item.name} ?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This will remove all information about current user
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => onDeleteUser(item.id)} color="primary" autoFocus>
                    Delete this user
                </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

const mapDispatchToProps = {
    deleteUser
}

export default connect(null, mapDispatchToProps)(Row);