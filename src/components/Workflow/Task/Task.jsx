import React, {useState} from 'react';
import classnames from 'classnames';
import Label from "../../ui/atoms/Label/Label";
import TruncateMarkup from 'react-truncate-markup';
import Status from "./Status/Status";
import {deleteTask} from '../../../redux/actions/tasks';
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

function Task(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let classes = useStyles();

    let letter = props.task.title.charAt(0);

    let setToDo = () => {
        props.setTaskToDo(props.id);
    }

    let setInProgress = () => {
        props.setTaskInProgress(props.id);
    }

    let setComplete = () => {
        props.setTaskComplete(props.id);
    }

    // let deleteTask = () => {
    //     if (window.confirm('Delete task "' + props.title + '" Are you sure?')) {
    //         alert('delete')
    //     }
    //     handleClose();
    // }


    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
        handleClose();
    };

    const onDeleteTask = (id) => {
        props.deleteTask(id);
        handleDialog();
    }

    return (
        <div className={classnames(s.task, {[props.customClass]: props.customClass})}>

            <Label title={letter}/>
            <div className={s.content}>
                <TruncateMarkup lines={1} ellipsis={' (...)'}>
                    <div className={s.title}>{props.task.title}</div>
                </TruncateMarkup>

                <Status
                    doneStatus={props.task.doneStatus}
                    progressStatus={props.task.progressStatus}
                    deadline={props.task.deadline}/>
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
                {!props.task.doneStatus && <MenuItem onClick={setComplete}>Set task as "Complete"</MenuItem>}
                {!props.task.progressStatus && <MenuItem onClick={setInProgress}>Set task as "In progress"</MenuItem>}
                {(props.task.doneStatus || props.task.progressStatus) ?
                    <MenuItem onClick={setToDo}> Set task as "To Do"</MenuItem> : ''}
                <MenuItem onClick={handleDialog}>Delete</MenuItem>
            </Menu>


            <Dialog
                open={openDialog}
                onClose={handleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Are you sure you want to delete "{props.task.title}" ?</DialogTitle>

                <DialogActions>
                    <Button onClick={handleDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => onDeleteTask(props.task.id)} color="primary" autoFocus>
                        Delete task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapDispatchToProps = {
    deleteTask
}

export default connect(null, mapDispatchToProps)(Task);