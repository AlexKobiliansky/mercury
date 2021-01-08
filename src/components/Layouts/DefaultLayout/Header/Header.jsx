import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import SearchLine from './SearchLine/SearchLine';
import UserMnu from "./UserMnu/UserMnu";
import s from './Header.module.sass';

//Material UI
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import Button from "../../../ui/atoms/Button/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    icon: {
       width: '33px',
       height: 'auto',
       fill: '#0e1a35',
       cursor: 'pointer',
       '&:hover': {
           fill: '#4565ad'
       }
    },
    badge: {
        width: '20px',
        height: '20px',
        fontSize: '10px',
        padding: 0,
        minWidth: 'auto',
        backgroundColor: '#5584ff',
        border: '2px solid #fff',
        top: '4px'
    }
}));

function Header(props) {

    const classes = useStyles();

    return (
        <div className={s.header}>
            <div className={s.headerLeft}>
                <Hamburger
                    toggleSidebar={props.toggleSidebar}
                    hiddenSidebar={props.hiddenSidebar}/>
                <SearchLine/>
            </div>

            <div className={s.headerRight}>
                <Button customClass={s.button}
                >Add project</Button>
                <div className={`${s.badgesWrap} ${classes.root}`}>
                    <Badge
                        badgeContent={4}
                        color="primary"
                        classes={{ badge: classes.badge }} >
                        <MailIcon className={classes.icon}/>
                    </Badge>

                    <Badge
                        badgeContent={3}
                        color="primary"
                        classes={{ badge: classes.badge }} >
                        <NotificationsIcon className={classes.icon} />
                    </Badge>
                </div>
                <UserMnu/>
            </div>
        </div>
    );
}

export default Header;