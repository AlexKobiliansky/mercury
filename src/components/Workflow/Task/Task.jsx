import React, {useState} from 'react';
import classnames from 'classnames';
import Label from "../../ui/atoms/Label/Label";
import TruncateMarkup from 'react-truncate-markup';
import Status from "./Status/Status";
import {changeTaskStatus, deleteTask} from '../../../redux/actions/tasks';
import {connect} from 'react-redux'

//Material UI
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Dialog, DialogActions, DialogTitle} from '@material-ui/core';

//styles
import s from './Task.module.sass'


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
    }
}));

function Task({task, customClass, deleteTask, changeTaskStatus}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let classes = useStyles();

    let letter = task.title.charAt(0);

    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
        handleClose();
    };

    return (
        <div className={classnames(s.task, {[customClass]: customClass})}>

            <Label title={letter}/>
            <div className={s.content}>
                <TruncateMarkup lines={1} ellipsis={' (...)'}>
                    <div className={s.title}>{task.title}</div>
                </TruncateMarkup>

                <Status
                    doneStatus={task.doneStatus}
                    progressStatus={task.progressStatus}
                    deadline={task.deadline}/>
            </div>
            <IconButton
                onClick={handleClick}
                classes={{root: classes.root}}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                disableScrollLock={true}
                open={open}
                onClose={handleClose}
            >
                {!task.doneStatus && <MenuItem onClick={() => changeTaskStatus(task.id, null, 3)}>Set task as "Complete"</MenuItem>}
                {!task.progressStatus && <MenuItem onClick={() => changeTaskStatus(task.id, null, 2)}>Set task as "In progress"</MenuItem>}
                {(task.doneStatus || task.progressStatus) ?
                    <MenuItem onClick={() => changeTaskStatus(task.id, null, 1)}> Set task as "To Do"</MenuItem> : ''}
                <MenuItem onClick={handleDialog}>Delete</MenuItem>
            </Menu>

            <Dialog
                open={openDialog}
                onClose={handleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Are you sure you want to delete "{task.title}" ?</DialogTitle>

                <DialogActions>
                    <Button onClick={handleDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => deleteTask(task.id)} color="primary" autoFocus>
                        Delete task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapDispatchToProps = {
    deleteTask,
    changeTaskStatus
}

export default connect(null, mapDispatchToProps)(Task);