import React from 'react';
import UserInfo from "../../UserInfo/UserInfo";
import UserActivity from "../../UserActivity/UserActivity";

//Matherial UI
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    menuItem: {
        boxShadow: '0px 0 5px 1px rgba(0,0,0,0.14)',
    },
    icon: {
        fontSize: '30px'
    }
}));

function Row(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let classes = useStyles();

    let deleteUser = (id) => {
        props.deleteUser(id);
        handleClose();
    }

    return (
        <tr >
            <td>
                <UserInfo
                    name={props.item.name}
                    img={props.item.avatar}
                    post={props.item.post}
                    online={props.item.online} />
            </td>
            <td>
                <UserActivity online={props.item.online} lastVisit={props.item.lastVisit}/>
            </td>
            <td><a href={`mailto:${props.item.email}`}>{props.item.email}</a></td>
            <td><a href={"tel:" + props.item.phone.replace(/[^\d]/g, '')}>{props.item.phone}</a></td>
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
                    <MenuItem onClick={()=>deleteUser(props.item.id)}>Delete User</MenuItem>
                </Menu>
            </td>
        </tr>
    );
}

export default Row;