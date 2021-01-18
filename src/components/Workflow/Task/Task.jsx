import React from 'react';
import classnames from 'classnames';
import Label from "../../ui/atoms/Label/Label";
import TruncateMarkup from 'react-truncate-markup';
import Status from "./Status/Status";
import {Draggable} from 'react-beautiful-dnd';

//Material UI
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

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

    let letter = props.title.charAt(0);

    return (
        <Draggable draggableId={props.id} index={props.index}>
            {(provided) => (
                <div
                    className={classnames(s.task, {[props.customClass]: props.customClass})}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>

                    <Label title={letter}/>
                    <div className={s.content}>
                        <TruncateMarkup lines={1} ellipsis={' (...)'}>
                            <div className={s.title}>{props.title}</div>
                        </TruncateMarkup>

                        <Status
                            doneStatus={props.doneStatus}
                            progressStatus={props.progressStatus}
                            deadline={props.deadline}/>
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
                        <MenuItem onClick={handleClose}>Setting 1</MenuItem>
                        <MenuItem onClick={handleClose}>Setting 2</MenuItem>
                        <MenuItem onClick={handleClose}>Setting 3</MenuItem>
                        <MenuItem onClick={handleClose}>Setting 4</MenuItem>
                    </Menu>
                </div>


            )}

        </Draggable>

    );
}

export default Task;